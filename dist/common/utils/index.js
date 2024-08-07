"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountriesQuery = exports.getCountryName = exports.mapToPresentableWine = void 0;
var CountriesEnum_1 = __importDefault(require("../enums/CountriesEnum"));
var mapToPresentableWine = function (inputWine) {
    var url = inputWine.price.url, _a = inputWine.vintage, id = _a.id, _b = _a.wine, wineryName = _b.winery.name, _c = _b.region, regionName = _c.name, _d = _c.country, code = _d.code, countryName = _d.name, bottle_small = _a.image.variations.bottle_small, wineName = _a.name, _e = _a.statistics, wine_ratings_average = _e.wine_ratings_average, wine_ratings_count = _e.wine_ratings_count, year = _a.year;
    return {
        id: id,
        imageUrl: bottle_small,
        wineName: wineName,
        wineUrl: url,
        winery: wineryName,
        regionName: regionName,
        country: {
            code: code,
            name: countryName,
        },
        ratings: {
            ratingsAverage: wine_ratings_average,
            ratingsCount: wine_ratings_count,
        },
        year: year,
    };
};
exports.mapToPresentableWine = mapToPresentableWine;
var getCountryName = function (country) {
    switch (country) {
        case CountriesEnum_1.default.AR: return 'Argentina';
        case CountriesEnum_1.default.AU: return 'Australia';
        case CountriesEnum_1.default.AT: return 'Austria';
        case CountriesEnum_1.default.CL: return 'Chile';
        case CountriesEnum_1.default.FR: return 'France';
        case CountriesEnum_1.default.DE: return 'Germany';
        case CountriesEnum_1.default.IT: return 'Italy';
        case CountriesEnum_1.default.PT: return 'Portugal';
        case CountriesEnum_1.default.ZA: return 'South Africa';
        case CountriesEnum_1.default.ES: return 'Spain';
        case CountriesEnum_1.default.US: return 'United States';
    }
};
exports.getCountryName = getCountryName;
var getCountriesQuery = function (countries) {
    if (countries.length === 0)
        return '';
    return "&".concat(countries
        .map(function (country) { return "country_codes[]=".concat(country); })
        .join('&'));
};
exports.getCountriesQuery = getCountriesQuery;
