"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var auth_1 = require("./auth");
function sendEmail(name, from, text, celular) {
    var user = auth_1.authData.user, pass = auth_1.authData.pass;
    var transporter = nodemailer_1.default.createTransport({
        //porta smtp
        host: 'smtp.umbler.com',
        //porta smtp do gmail
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass,
        }
    });
    transporter.sendMail({
        from: name + " |" + from + "| --> <" + user + ">",
        to: "" + user,
        subject: "Novo Contato (" + name + ")",
        html: "\n\t\t<h1>Contato de: " + name + "</h2>\n\t\t<br>\n\t\t<h2>E-mail: " + from + "</h2>\n\t\t\n\t\t<h2>Celular: " + celular + "</h2>\n\t\t<br>\n\t\t<h3>Mensagem</h3>\n\t\t<strong>\n\t\t\t" + text + "\t\t\n\t\t</strong>\n\t\n\t"
    }).then(function (message) {
        return message;
    }).catch(function (err) {
        return err.message;
    });
}
exports.sendEmail = sendEmail;
