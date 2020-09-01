"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./rotas_email/routes"));
var server = express_1.default();
server.use(cors_1.default());
server.use(express_1.default.json());
server.use(routes_1.default);
var PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
    console.log("server is working on port " + PORT);
});
