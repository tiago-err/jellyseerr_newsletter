export interface TrendingShowResult {
	id: number;
	firstAirDate: string;
	genreIds: number[];
	mediaType: "tv";
	name: string;
	originCountry: string[];
	originalLanguage: string;
	originalName: string;
	overview: string;
	popularity: number;
	voteAverage: number;
	voteCount: number;
	backdropPath: string;
	posterPath: string;
	url?: string;
	isAdded?: boolean;
}

export interface RequestSeriesResult {
	id: number;
	status: number;
	createdAt: string;
	updatedAt: string;
	type: "tv";
	is4k: boolean;
	serverId: null;
	profileId: null;
	rootFolder: null;
	languageProfileId: null;
	tags: null;
	media: Media;
	seasons: SeasonsItem[];
	modifiedBy: ModifiedBy;
	requestedBy: RequestedBy;
	seasonCount: number;
}
interface Media {
	downloadStatus: DownloadStatusItem[];
	downloadStatus4k: any[];
	id: number;
	mediaType: "tv";
	tmdbId: number;
	tvdbId: number;
	imdbId: null;
	status: number;
	status4k: number;
	createdAt: string;
	updatedAt: string;
	lastSeasonChange: string;
	mediaAddedAt: null;
	serviceId: number;
	serviceId4k: null;
	externalServiceId: number;
	externalServiceId4k: null;
	externalServiceSlug: string;
	externalServiceSlug4k: null;
	ratingKey: null;
	ratingKey4k: null;
	jellyfinMediaId: null;
	jellyfinMediaId4k: null;
	serviceUrl: string;
}
interface DownloadStatusItem {
	externalId: number;
	estimatedCompletionTime: string;
	mediaType: "tv";
	size: number;
	sizeLeft: number;
	status: string;
	timeLeft: string;
	title: string;
}
interface SeasonsItem {
	id: number;
	seasonNumber: number;
	status: number;
	createdAt: string;
	updatedAt: string;
}
interface ModifiedBy {
	permissions: number;
	warnings: any[];
	id: number;
	email: string;
	plexUsername: null;
	jellyfinUsername: string;
	username: null;
	recoveryLinkExpirationDate: null;
	userType: number;
	plexId: null;
	jellyfinUserId: string;
	jellyfinDeviceId: string;
	jellyfinAuthToken: string;
	plexToken: null;
	avatar: string;
	movieQuotaLimit: null;
	movieQuotaDays: null;
	tvQuotaLimit: null;
	tvQuotaDays: null;
	createdAt: string;
	updatedAt: string;
	requestCount: number;
	displayName: string;
}
interface RequestedBy {
	permissions: number;
	warnings: any[];
	id: number;
	email: string;
	plexUsername: null;
	jellyfinUsername: string;
	username: null;
	recoveryLinkExpirationDate: null;
	userType: number;
	plexId: null;
	jellyfinUserId: string;
	jellyfinDeviceId: string;
	jellyfinAuthToken: string;
	plexToken: null;
	avatar: string;
	movieQuotaLimit: null;
	movieQuotaDays: null;
	tvQuotaLimit: null;
	tvQuotaDays: null;
	createdAt: string;
	updatedAt: string;
	requestCount: number;
	displayName: string;
}

export interface MediaSeriesResult {
	id: number;
	backdropPath: string;
	posterPath: string;
	contentRatings: ContentRatings;
	createdBy: CreatedByItem[];
	episodeRunTime: number[];
	firstAirDate: string;
	genres: GenresItem[];
	homepage: string;
	inProduction: boolean;
	languages: string[];
	lastAirDate: string;
	lastEpisodeToAir: LastEpisodeToAir;
	name: string;
	nextEpisodeToAir: NextEpisodeToAir;
	networks: NetworksItem[];
	numberOfEpisodes: number;
	numberOfSeason: number;
	originCountry: string[];
	originalLanguage: string;
	originalName: string;
	overview: string;
	popularity: number;
	productionCompanies: ProductionCompaniesItem[];
	productionCountries: ProductionCountriesItem[];
	spokenLanguages: SpokenLanguagesItem[];
	seasons: SeasonsItem[];
	status: string;
	tagline: string;
	type: string;
	voteAverage: number;
	voteCount: number;
	credits: Credits;
	externalIds: ExternalIds;
	keywords: KeywordsItem[];
	mediaInfo: MediaInfo;
	watchProviders: any[];
}
interface ContentRatings {
	results: ResultsItem[];
}
interface ResultsItem {
	iso_3166_1: string;
	rating: string;
}
interface CreatedByItem {
	id: number;
	name: string;
	gender: number;
	profilePath: string;
}
interface GenresItem {
	id: number;
	name: string;
}
interface LastEpisodeToAir {
	id: number;
	name: string;
	airDate: string;
	episodeNumber: number;
	overview: string;
	productionCode: string;
	seasonNumber: number;
	showId: number;
	stillPath: string;
	voteAverage: number;
	voteCount: number;
}
interface NextEpisodeToAir {
	id: number;
	name: string;
	airDate: string;
	episodeNumber: number;
	overview: string;
	productionCode: string;
	seasonNumber: number;
	showId: number;
	stillPath: string;
	voteAverage: number;
	voteCount: number;
}
interface NetworksItem {
	id: number;
	logoPath: string;
	originCountry: string;
	name: string;
}
interface ProductionCompaniesItem {
	id: number;
	logoPath: string;
	originCountry: string;
	name: string;
}
interface ProductionCountriesItem {
	iso_3166_1: string;
	name: string;
}
interface SpokenLanguagesItem {
	englishName: string;
	iso_639_1: string;
	name: string;
}
interface SeasonsItem {
	id: number;
	airDate: string;
	episodeCount: number;
	name: string;
	overview: string;
	posterPath: string;
	seasonNumber: number;
	episodes: EpisodesItem[];
}
interface EpisodesItem {
	id: number;
	name: string;
	airDate: string;
	episodeNumber: number;
	overview: string;
	productionCode: string;
	seasonNumber: number;
	showId: number;
	stillPath: string;
	voteAverage: number;
	voteCount: number;
}
interface Credits {
	cast: CastItem[];
	crew: CrewItem[];
}
interface CastItem {
	id: number;
	castId: number;
	character: string;
	creditId: string;
	gender: number;
	name: string;
	order: number;
	profilePath: string;
}
interface CrewItem {
	id: number;
	creditId: string;
	gender: number;
	name: string;
	job: string;
	department: string;
	profilePath: string;
}
interface ExternalIds {
	facebookId: string;
	freebaseId: string;
	freebaseMid: string;
	imdbId: string;
	instagramId: string;
	tvdbId: number;
	tvrageId: number;
	twitterId: string;
}
interface KeywordsItem {
	id: number;
	name: string;
}
interface MediaInfo {
	id: number;
	tmdbId: number;
	tvdbId: number;
	status: number;
	requests: RequestsItem[];
	createdAt: string;
	updatedAt: string;
	mediaUrl: string;
}
interface RequestsItem {
	id: number;
	status: number;
	media: string;
	createdAt: string;
	updatedAt: string;
	requestedBy: RequestedBy;
	modifiedBy: ModifiedBy;
	is4k: boolean;
	serverId: number;
	profileId: number;
	rootFolder: string;
}
interface WatchProvidersItemItem {
	iso_3166_1: string;
	link: string;
	buy: BuyItem[];
	flatrate: FlatrateItem[];
}
interface BuyItem {
	displayPriority: number;
	logoPath: string;
	id: number;
	name: string;
}
interface FlatrateItem {
	displayPriority: number;
	logoPath: string;
	id: number;
	name: string;
}
