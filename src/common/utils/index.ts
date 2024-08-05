import { InputWineInfo, PresentableWineInfo } from '../types/WineTypes';

export const mapToPresentableWine = (inputWine: InputWineInfo): PresentableWineInfo => {
    const {
        price: { url },
        vintage: {
            wine: {
                id,
                winery: { name: wineryName },
                region: {
                    name: regionName,
                    country: { code, name: countryName },
                },
            },
            image: { location },
            name: wineName,
            statistics: {
                wine_ratings_average,
                wine_ratings_count,
            },
            year,
        },
    } = inputWine;

    return {
        id,
        imageUrl: location,
        wineName,
        wineUrl: url,
        winery: wineryName,
        regionName,
        country: {
            code,
            name: countryName,
        },
        ratings: {
            ratingsAverage: wine_ratings_average,
            ratingsCount: wine_ratings_count,
        },
        year,
    };
};