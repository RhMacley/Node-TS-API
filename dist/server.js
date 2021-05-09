"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    return res.json({ message: "Olá mundo" });
});
app.listen(3333, function () {
    console.log("O server est\u00E1 rodando no endere\u00E7o: http://localhost:3333 \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80");
});
