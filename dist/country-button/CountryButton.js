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
var flag_1 = __importDefault(require("../flag"));
var utils_1 = require("../common/utils");
var styles = __importStar(require("./CountryButton.module.css"));
var CountryButton = function (_a) {
    var _b;
    var country = _a.country, hasCountry = _a.hasCountry, onClick = _a.onClick;
    return (react_1.default.createElement("button", { className: (0, classnames_1.default)(styles.root, (_b = {}, _b[styles.faded] = !hasCountry, _b)), onClick: onClick },
        react_1.default.createElement("div", { className: styles.flag },
            react_1.default.createElement(flag_1.default, { country: country })),
        (0, utils_1.getCountryName)(country)));
};
exports.default = CountryButton;
