export interface TrendingMovieResult {
	id: number;
	mediaType: "movie";
	adult: boolean;
	genreIds: number[];
	originalLanguage: string;
	originalTitle: string;
	overview: string;
	popularity: number;
	releaseDate: string;
	title: string;
	video: boolean;
	voteAverage: number;
	voteCount: number;
	backdropPath: string;
	posterPath: string;
	url?: string;
	isAdded?: boolean;
}

export interface RequestMovieResult {
	id: number;
	status: number;
	createdAt: string;
	updatedAt: string;
	type: "movie";
	is4k: boolean;
	serverId: number;
	profileId: number;
	rootFolder: string;
	languageProfileId: null;
	tags: any[];
	media: Media;
	seasons: any[];
	modifiedBy: ModifiedBy;
	requestedBy: RequestedBy;
	seasonCount: number;
}
interface Media {
	downloadStatus: any[];
	downloadStatus4k: any[];
	id: number;
	mediaType: "movie";
	tmdbId: number;
	tvdbId: null;
	imdbId: null;
	status: number;
	status4k: number;
	createdAt: string;
	updatedAt: string;
	lastSeasonChange: string;
	mediaAddedAt: string;
	serviceId: number;
	serviceId4k: null;
	externalServiceId: number;
	externalServiceId4k: null;
	externalServiceSlug: string;
	externalServiceSlug4k: null;
	ratingKey: null;
	ratingKey4k: null;
	jellyfinMediaId: string;
	jellyfinMediaId4k: null;
	mediaUrl: string;
	serviceUrl: string;
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

export interface MediaMovieResult {
	id: number;
	imdbId: string;
	adult: boolean;
	backdropPath: string;
	posterPath: string;
	budget: number;
	genres: GenresItem[];
	homepage: string;
	relatedVideos: RelatedVideosItem[];
	originalLanguage: string;
	originalTitle: string;
	overview: string;
	popularity: number;
	productionCompanies: ProductionCompaniesItem[];
	productionCountries: ProductionCountriesItem[];
	releaseDate: string;
	releases: Releases;
	revenue: number;
	runtime: number;
	spokenLanguages: SpokenLanguagesItem[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	voteAverage: number;
	voteCount: number;
	credits: Credits;
	collection: Collection;
	externalIds: ExternalIds;
	mediaInfo: MediaInfo;
	watchProviders: any[];
}
interface GenresItem {
	id: number;
	name: string;
}
interface RelatedVideosItem {
	url: string;
	key: string;
	name: string;
	size: number;
	type: string;
	site: string;
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
interface Releases {
	results: ResultsItem[];
}
interface ResultsItem {
	iso_3166_1: string;
	rating: string;
	release_dates: ReleaseDatesItem[];
}
interface ReleaseDatesItem {
	certification: string;
	iso_639_1: string;
	note: string;
	release_date: string;
	type: number;
}
interface SpokenLanguagesItem {
	englishName: string;
	iso_639_1: string;
	name: string;
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
interface Collection {
	id: number;
	name: string;
	posterPath: string;
	backdropPath: string;
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
