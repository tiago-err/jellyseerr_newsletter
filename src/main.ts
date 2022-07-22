import axios, {AxiosResponse} from "axios";
import dotenv from "dotenv";
import {
	TrendingPagination,
	TrendingMovieResult,
	TrendingShowResult,
	MediaResult,
	RequestPagination,
	RequestResult,
	MediaSeriesResult,
	MediaMovieResult,
} from "./interfaces";
import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import cron from "node-cron";

dotenv.config();
const JELLYSEERR_BASE = process.env.JELLYSEER_BASE!;
const JELLYSEERR_URL = `${JELLYSEERR_BASE}/api/v1`;
const TMDB_IMG = "https://image.tmdb.org/t/p/w300_and_h450_face";

function prepareMailer(): nodemailer.Transporter {
	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAIL_USER!,
			pass: process.env.MAIL_PASS!,
		},
	});

	const handlebarOptions: hbs.NodemailerExpressHandlebarsOptions = {
		viewEngine: {
			partialsDir: path.resolve("src/views"),
			defaultLayout: false,
		},
		viewPath: path.resolve("src/views"),
	};

	transport.use("compile", hbs(handlebarOptions));
	return transport;
}

function prepareMailOptions(itemList: any[], subject: string) {
	return {
		from: process.env.MAIL_USER!,
		to: process.env.MAIL_RECEIVERS!.split(","),
		subject,
		template: "email",
		context: {
			itemList,
			logo: `${JELLYSEERR_BASE}/os_icon.svg`,
		},
	};
}

async function getMediaInfo(apiKey: string, mediaType: "tv" | "movie", id: number): Promise<MediaResult> {
	return axios.get(`${JELLYSEERR_URL}/${mediaType}/${id}`, {headers: {"X-API-KEY": apiKey}}).then((result) => {
		return result.data as MediaResult;
	});
}

async function retrieveRecentlyAdded(apiKey: string) {
	const addedPromise = axios.get(`${JELLYSEERR_URL}/request?filter=all&take=${process.env.ADDED_AMOUNT!}&sort=modified&skip=0`, {
		headers: {"X-API-KEY": apiKey},
	});

	return addedPromise.then(async (values: AxiosResponse<RequestPagination>): Promise<RequestResult[]> => {
		const dataValues = values.data.results.map((item) => Object.assign(item, {url: `${JELLYSEERR_BASE}/${item.type}/${item.id}`}));

		return await Promise.all(
			dataValues.map(async (item): Promise<RequestResult> => {
				const media = await getMediaInfo(apiKey, item.type, item.media.tmdbId);
				return Object.assign(
					item,
					{posterPath: `${TMDB_IMG}/${media.posterPath}`, overview: media.overview},
					item.type === "tv" ? {name: (media as MediaSeriesResult).name} : {title: (media as MediaMovieResult).title},
					!media.mediaInfo ? {isAdded: false} : {url: media.mediaInfo.mediaUrl, isAdded: true},
				);
			}),
		);
	});
}

async function retrieveTrending(apiKey: string) {
	const trendingPromises = [...Array(parseInt(process.env.TRENDING_PAGES!)).keys()].map((page) =>
		axios.get(`${JELLYSEERR_URL}/discover/trending?page=${page + 1}`, {headers: {"X-API-KEY": apiKey}}),
	);

	return Promise.all(trendingPromises).then(
		async (values: AxiosResponse<TrendingPagination>[]): Promise<(TrendingMovieResult | TrendingShowResult)[]> => {
			const dataValues = values
				.map((value) => value.data)
				.flatMap((value) => value.results)
				.map((item) => Object.assign(item, {url: `${JELLYSEERR_BASE}/${item.mediaType}/${item.id}`}))
				.map((item) => Object.assign(item, {posterPath: `${TMDB_IMG}/${item.posterPath}`}));

			return await Promise.all(
				dataValues.map(async (item): Promise<TrendingMovieResult | TrendingShowResult> => {
					const media = await getMediaInfo(apiKey, item.mediaType, item.id);
					return Object.assign(item, !media.mediaInfo ? {isAdded: false} : {url: media.mediaInfo.mediaUrl, isAdded: true});
				}),
			);
		},
	);
}

function sendMail(promise: (key: string) => Promise<any[]>, subject: string) {
	const trending = promise(process.env.API_KEY!);
	trending.then((itemList) => {
		const transport = prepareMailer();
		const mailOptions = prepareMailOptions(itemList, subject);
		transport.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.error(error);
			}
			console.log(`SUBJECT: ${subject}\nMessage sent: ${info.response}\n`);
		});
	});
}

cron.schedule(process.env.CRON_TRENDING!, () => {
	sendMail(retrieveTrending, "Jellyseerr - Trending");
});

cron.schedule(process.env.CRON_ADDED!, () => {
	sendMail(retrieveRecentlyAdded, "Jellyseerr - Recently Added");
});
