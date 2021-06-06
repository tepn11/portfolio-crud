"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinModel = void 0;
var mongoose_1 = require("mongoose");
var CoinSchema = new mongoose_1.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    boughtAmount: { type: Number, required: true },
    boughtPrice: { type: Number, required: true },
    notes: { type: String, required: false },
    // boughtDate: { type: Date, required: false, default: new Date() },
});
var CoinModel = mongoose_1.model('Coin', CoinSchema);
exports.CoinModel = CoinModel;
