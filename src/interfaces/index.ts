import {TrendingMovieResult, MediaMovieResult, RequestMovieResult} from "./movie";
import {TrendingShowResult, MediaSeriesResult, RequestSeriesResult} from "./series";

export {TrendingMovieResult, TrendingShowResult, MediaMovieResult, MediaSeriesResult};

export interface Pagination {
	page: number;
	totalPages: number;
	totalResults: number;
}

export interface TrendingPagination extends Pagination {
	results: (TrendingMovieResult | TrendingShowResult)[];
}

export type MediaResult = MediaMovieResult | MediaSeriesResult;
export type RequestResult = RequestMovieResult | RequestSeriesResult;

export interface RequestPagination extends Pagination {
	results: RequestResult[];
}
