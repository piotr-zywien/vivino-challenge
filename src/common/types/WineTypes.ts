import CountriesEnum from '../enums/CountriesEnum';

export interface Country {
    code: CountriesEnum;
    name: string;
}

export interface InputWineInfo {
    price: {
        url: string;
    };
    prices: object[];
    vintage: {
        wine: {
            id: number;
            winery: {
                name: string;
            };
            region: {
                name: string;
                country: Country
            },
        };
        image: {
            location: string;
        };
        name: string;
        statistics: {
            wine_ratings_average: number;
            wine_ratings_count: number;
        };
        year: number;
    };
}

export default interface PresentableWineRatings {
    ratingsAverage: number;
    ratingsCount: number;
}

export interface PresentableWineInfo {
    id: number;
    imageUrl: string;
    wineName: string;
    wineUrl: string;
    winery: string;
    regionName: string;
    country: Country;
    ratings: PresentableWineRatings;
    year: number;

}