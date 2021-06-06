"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
var coinsService = __importStar(require("./services/coin.service"));
var priceService = __importStar(require("./services/binance.service"));
var router = express_1.default.Router();
exports.Router = router;
router.get('/coins', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, coinsService.findAll()];
            case 1:
                response = _a.sent();
                // console.log(response);
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
router.post('/coin/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                return [4 /*yield*/, coinsService.create(body)];
            case 1:
                response = _a.sent();
                console.log('response in route', response);
                if (response) {
                    return [2 /*return*/, res.send({ success: true, msg: 'New coin added' })];
                }
                else {
                    return [2 /*return*/, res.send({ success: false, msg: 'Error adding coin' })];
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/coin/findBySymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var value, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                value = String((_a = req.query) === null || _a === void 0 ? void 0 : _a.value);
                if (!!value) return [3 /*break*/, 1];
                return [2 /*return*/, res.send({ msg: 'No documents found in search' })];
            case 1: return [4 /*yield*/, coinsService.findBySymbol(value)];
            case 2:
                response = _b.sent();
                console.log('response', response);
                if (!response || response === null) {
                    return [2 /*return*/, res.send({ msg: 'No documents found in search' })];
                }
                res.send(response);
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/coin/findByName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var value, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                value = String((_a = req.query) === null || _a === void 0 ? void 0 : _a.value);
                if (!value) {
                    res.send({ msg: 'No documents found' });
                }
                return [4 /*yield*/, coinsService.findByName(value)];
            case 1:
                response = _b.sent();
                console.log('response', response);
                if (!response || response === null) {
                    return [2 /*return*/, res.send({ msg: 'No documents found in search' })];
                }
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
router.get('/coin/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                if (!id) {
                    return [2 /*return*/, res.end(500)];
                }
                return [4 /*yield*/, coinsService.find(id)];
            case 1:
                response = _b.sent();
                // console.log(response);
                if (!response || response === null) {
                    return [2 /*return*/, res.send({ msg: 'No document found' })];
                }
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
router.put('/coin/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                body = req.body;
                if (!id) {
                    return [2 /*return*/, res.end(500)];
                }
                return [4 /*yield*/, coinsService.update(id, body)];
            case 1:
                response = _b.sent();
                // console.log(response);
                if (!response || response === null) {
                    return [2 /*return*/, res.send({ msg: 'Could not update coin' })];
                }
                res.send({ success: true, msg: 'Coin updated' });
                return [2 /*return*/];
        }
    });
}); });
router.delete('/coin/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
                if (!id) {
                    return [2 /*return*/, res.end(500)];
                }
                return [4 /*yield*/, coinsService.remove(id)];
            case 1:
                response = _b.sent();
                // console.log(response);
                if (!response || response === null) {
                    return [2 /*return*/, res.send({ msg: 'No document found' })];
                }
                res.send({ success: true, msg: 'Coin successfully deleted' });
                return [2 /*return*/];
        }
    });
}); });
router.get('/coinPrice', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var coin, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                coin = String((_a = req.query) === null || _a === void 0 ? void 0 : _a.coin);
                return [4 /*yield*/, priceService.getCoinPrice(coin)];
            case 1:
                response = _b.sent();
                console.log(response);
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
