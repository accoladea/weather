export type SuggestionProps = {
    onSuggestionSelect: (str: string, item: SuggestType) => void
    item: SuggestType
}

export type SuggestionsProps = {
    searchTerm: string
    onSuggestionSelect: (str: string, item: SuggestType) => void
    coord: CoordType | undefined
}

export type SuggestType = {
    name: string
    country: string
    state?: string
    local_names?: []
    lat: number
    lon: number
}

export type LocationType = {
    name: string
    country: string
    state?: string
    coord: CoordType
}

export type CoordType = {
    lat: number | string
    lon: number | string
}

export type TimeType = {
    timezone: string
    timezone_offset: number
    sunset: number
    sunrise: number
    lastFetchDate: number
}

export interface WeatherData {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: Current
    minutely: Minutely[]
    hourly: Hourly[]
    daily: Daily[]
    alerts?: Alert[]
}

export interface Current {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: Weather[]
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Minutely {
    dt: number
    precipitation: number
}

export interface Hourly {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: Weather[]
    pop: number
    snow?: Snow
    rain?: Rain
}

export interface Snow {
    "1h": number
}
export interface Rain {
    "1h": number
}

export interface Daily {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    temp: Temp
    feels_like: FeelsLike
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: Weather[]
    clouds: number
    pop: number
    uvi: number
    snow?: number
    rain?: number
}

export interface Temp {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}

export interface FeelsLike {
    day: number
    night: number
    eve: number
    morn: number
}

export interface Alert {
    sender_name: string
    event: string
    start: number
    end: number
    description: string
    tags: string[]
}

export type HourlyTime = {
    timezone: string
    sunset: number
    sunrise: number
}

export interface UnsplashImage {
    total: number
    total_pages: number
    results: Result[]
}

export interface Result {
    id: string
    created_at: string
    updated_at: string
    promoted_at?: string
    width: number
    height: number
    color: string
    blur_hash: string
    description?: string
    alt_description?: string
    urls: Urls
    links: Links
    categories: any[]
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: any
    topic_submissions: TopicSubmissions
    user: User
    tags: Tag[]
}

export interface Urls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}

export interface Links {
    self: string
    html: string
    download: string
    download_location: string
}

export interface TopicSubmissions {
    wallpapers?: Wallpapers
    "street-photography"?: StreetPhotography
    people?: People
}

export interface Wallpapers {
    status: string
}

export interface StreetPhotography {
    status: string
    approved_on: string
}

export interface People {
    status: string
}

export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string
    twitter_username?: string
    portfolio_url?: string
    bio?: string
    location?: string
    links: UserLinks
    profile_image: ProfileImage
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
    for_hire: boolean
    social: Social
}

export interface ProfileImage {
    small: string
    medium: string
    large: string
}

export interface Social {
    instagram_username: string
    portfolio_url?: string
    twitter_username?: string
    paypal_email: any
}

export interface Tag {
    type: string
    title: string
    source?: Source
}

export interface Source {
    ancestry: Ancestry
    title: string
    subtitle: string
    description: string
    meta_title: string
    meta_description: string
    cover_photo: CoverPhoto
}

export interface Ancestry {
    type: Type
    category: Category
    subcategory: Subcategory
}

export interface Type {
    slug: string
    pretty_slug: string
}

export interface Category {
    slug: string
    pretty_slug: string
}

export interface Subcategory {
    slug: string
    pretty_slug: string
}

export interface CoverPhoto {
    id: string
    created_at: string
    updated_at: string
    promoted_at?: string
    width: number
    height: number
    color: string
    blur_hash: string
    description?: string
    alt_description: string
    urls: Urls
    links: Links
    categories: any[]
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: any
    topic_submissions: TopicSubmissions
    user: User
}

export interface UserLinks {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
}

export interface GeopluginData {
    geoplugin_request: string
    geoplugin_status: number
    geoplugin_delay: string
    geoplugin_credit: string
    geoplugin_city: string
    geoplugin_region: string
    geoplugin_regionCode: string
    geoplugin_regionName: string
    geoplugin_areaCode: string
    geoplugin_dmaCode: string
    geoplugin_countryCode: string
    geoplugin_countryName: string
    geoplugin_inEU: number
    geoplugin_euVATrate: boolean
    geoplugin_continentCode: string
    geoplugin_continentName: string
    geoplugin_latitude: string
    geoplugin_longitude: string
    geoplugin_locationAccuracyRadius: string
    geoplugin_timezone: string
    geoplugin_currencyCode: string
    geoplugin_currencySymbol: string
    geoplugin_currencySymbol_UTF8: string
    geoplugin_currencyConverter: number
}
