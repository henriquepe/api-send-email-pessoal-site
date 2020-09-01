"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sendding_email_1 = require("../middlewares/sendding_email");
var routes = express_1.Router();
routes.post('/', function (request, response) {
    var _a = request.body, name = _a.name, from = _a.from, text = _a.text, celular = _a.celular;
    var message = sendding_email_1.sendEmail(name, from, text, celular);
    return response.json({ message: message });
});
exports.default = routes;
