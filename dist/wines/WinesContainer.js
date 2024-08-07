"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var filters_1 = __importDefault(require("../filters"));
var wine_1 = __importDefault(require("../wine"));
var WinesResource_1 = __importDefault(require("./WinesResource"));
var styles = __importStar(require("./WinesContainer.module.css"));
var WinesContainer = function () {
    var _a;
    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)([]), wines = _c[0], setWines = _c[1];
    var _d = (0, react_1.useState)([]), countries = _d[0], setCountries = _d[1];
    var toggleCountry = function (country) {
        if (countries.includes(country)) {
            setCountries(function (prevState) {
                return prevState.filter(function (present) { return present !== country; });
            });
        }
        else {
            setCountries(function (prevState) { return __spreadArray([country], prevState, true); });
        }
    };
    var hasCountry = function (country) { return countries.includes(country); };
    var onSearch = function () {
        setWines([]);
        setIsLoading(true);
        (0, WinesResource_1.default)(countries).then(function (response) {
            setWines(response);
            setIsLoading(false);
        });
    };
    var onClear = function () { return setCountries([]); };
    (0, react_1.useEffect)(function () {
        onSearch();
    }, []);
    return (react_1.default.createElement("div", { className: styles.root },
        react_1.default.createElement(filters_1.default, { toggleCountry: toggleCountry, hasCountry: hasCountry, onSearch: onSearch, onClear: onClear, isLoading: isLoading }),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(styles.loader, (_a = {}, _a[styles.loaderHidden] = !isLoading, _a)) }),
        wines.map(function (wine) { return (react_1.default.createElement(wine_1.default, { key: "listed-wine-".concat(wine.id), data: wine })); })));
};
exports.default = WinesContainer;
