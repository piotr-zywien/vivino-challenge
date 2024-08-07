"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../common/utils");
exports.default = (function (countries) { return fetch("/api/explore/explore?grape_ids[]=2&grape_filter=varietal".concat((0, utils_1.getCountriesQuery)(countries)))
    .then(function (response) { return response.json(); })
    .then(function (response) { var _a, _b; return (_b = (_a = response === null || response === void 0 ? void 0 : response.explore_vintage) === null || _a === void 0 ? void 0 : _a.matches) === null || _b === void 0 ? void 0 : _b.map(function (match) { return (0, utils_1.mapToPresentableWine)(match); }); }); });
