import { InputWineInfo, PresentableWineInfo } from '../types/WineTypes';

export const mapToPresentableWine = (inputWine: InputWineInfo): PresentableWineInfo => {
    const {
        price: { url },
        vintage: {
            id,
            wine: {
                winery: { name: wineryName },
                region: {
                    name: regionName,
                    country: { code, name: countryName },
                },
            },
            image: { variations: { bottle_small } },
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
        imageUrl: bottle_small,
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