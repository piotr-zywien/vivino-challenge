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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var CountriesEnum_1 = __importDefault(require("../common/enums/CountriesEnum"));
var country_button_1 = __importDefault(require("../country-button"));
var styles = __importStar(require("./Filters.module.css"));
var Filters = function (_a) {
    var _b, _c;
    var toggleCountry = _a.toggleCountry, hasCountry = _a.hasCountry, onSearch = _a.onSearch, onClear = _a.onClear, isLoading = _a.isLoading;
    return (react_1.default.createElement("div", { className: styles.root },
        react_1.default.createElement("div", { className: styles.countries }, Object.values(CountriesEnum_1.default).map(function (country) { return (react_1.default.createElement(country_button_1.default, { key: "filter-country-".concat(country), country: country, hasCountry: hasCountry(country), onClick: function () { return toggleCountry(country); } })); })),
        react_1.default.createElement("div", { className: styles.actions },
            react_1.default.createElement("button", { disabled: isLoading, className: (0, classnames_1.default)(styles.search, (_b = {},
                    _b[styles.disabled] = isLoading,
                    _b)), onClick: onSearch }, "Search"),
            react_1.default.createElement("button", { disabled: isLoading, className: (0, classnames_1.default)(styles.clear, (_c = {},
                    _c[styles.disabled] = isLoading,
                    _c)), onClick: onClear }, "Clear"))));
};
exports.default = Filters;
