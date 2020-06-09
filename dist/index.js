"use strict";
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
var web3_1 = __importDefault(require("web3"));
var contract_loader_1 = require("@openzeppelin/contract-loader");
var super_web3_provider_1 = require("super-web3-provider");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var ropstenManualSignProvider, web3, loader, Counter, accounts, estimateGas, gasPrice, counterInstance, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ropstenManualSignProvider = new super_web3_provider_1.ManualSignProvider({
                        projectId: '5e81dee85c27530018e59ffb',
                        token: '4Z0v6K62Ahu0zKDv/omR/pbB7VO2BLZojt8vM/X9nxRA663AmS8P2pse',
                        networkId: '3',
                        endpoint: 'https://ropsten.infura.io/v3/58b57895912346bf8aefba3cab0db459',
                        from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd',
                        metadata: {},
                    });
                    web3 = new web3_1.default(ropstenManualSignProvider);
                    loader = contract_loader_1.setupLoader({ provider: web3 }).web3;
                    Counter = loader.fromArtifact('Counter');
                    return [4 /*yield*/, web3.eth.getAccounts()];
                case 1:
                    accounts = _a.sent();
                    return [4 /*yield*/, Counter.deploy().estimateGas()];
                case 2:
                    estimateGas = _a.sent();
                    return [4 /*yield*/, web3.eth.getGasPrice()];
                case 3:
                    gasPrice = _a.sent();
                    return [4 /*yield*/, Counter.deploy()
                            .send({ from: accounts[0], gas: estimateGas, gasPrice: gasPrice })];
                case 4:
                    counterInstance = _a.sent();
                    // Send a transaction to increase() the Counter contract
                    return [4 /*yield*/, counterInstance.methods.increase(20)
                            .send({ from: accounts[0], gas: 50000, gasPrice: 1e6 })];
                case 5:
                    // Send a transaction to increase() the Counter contract
                    _a.sent();
                    return [4 /*yield*/, counterInstance.methods.value().call()];
                case 6:
                    value = _a.sent();
                    console.log(value);
                    process.exit();
                    return [2 /*return*/];
            }
        });
    });
}
if (require.main === module) {
    //   const network: string = process.argv[2];
    main();
}
