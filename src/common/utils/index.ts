import { InputWineInfo, PresentableWineInfo } from '../types/WineTypes';
import CountriesEnum from '../enums/CountriesEnum';

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

export const getCountryName = (country: CountriesEnum) => {
    switch (country) {
        case CountriesEnum.AR: return 'Argentina';
        case CountriesEnum.AU: return 'Australia';
        case CountriesEnum.AT: return 'Austria';
        case CountriesEnum.CL: return 'Chile';
        case CountriesEnum.FR: return 'France';
        case CountriesEnum.DE: return 'Germany';
        case CountriesEnum.IT: return 'Italy';
        case CountriesEnum.PT: return 'Portugal';
        case CountriesEnum.ZA: return 'South Africa';
        case CountriesEnum.ES: return 'Spain';
        case CountriesEnum.US: return 'United States';
    }
};

export const getCountriesQuery = (countries: CountriesEnum[]) => {
    if (countries.length === 0) return '';
    return `&${countries
        .map((country: CountriesEnum) => `country_codes[]=${country}`)
        .join('&')}`;
};
