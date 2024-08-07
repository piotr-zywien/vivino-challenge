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
var flag_1 = __importDefault(require("../flag"));
var Stats_1 = __importDefault(require("../stats/Stats"));
var styles = __importStar(require("./Wine.module.css"));
var Wine = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", { className: styles.root },
        react_1.default.createElement("img", { className: styles.bottle, src: data.imageUrl }),
        react_1.default.createElement("div", { className: styles.info },
            react_1.default.createElement("span", { className: styles.winery }, data.winery),
            react_1.default.createElement("span", { className: styles.name },
                react_1.default.createElement("a", { className: styles.link, target: "_blank", href: data.wineUrl }, data.wineName)),
            react_1.default.createElement("div", { className: styles.region },
                react_1.default.createElement(flag_1.default, { country: data.country.code }),
                react_1.default.createElement("span", { className: styles.regionText }, "".concat(data.regionName, ", ").concat(data.country.name)))),
        react_1.default.createElement("div", { className: styles.stats },
            react_1.default.createElement(Stats_1.default, { data: data.ratings }))));
};
exports.default = Wine;
