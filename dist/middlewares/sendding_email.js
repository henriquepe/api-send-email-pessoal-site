"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
function sendEmail(name, from, text, celular) {
    var transporter = nodemailer_1.default.createTransport({
        //porta smtp
        host: 'smtp.gmail.com',
        //porta smtp do gmail
        port: 587,
        secure: false,
        auth: {
            user: 'henrique.p.espindola@gmail.com',
            pass: 'rosa1702',
        }
    });
    transporter.sendMail({
        from: name + " |" + from + "| --> <" + from + ">",
        to: "henrique.p.espindola@gmail.com",
        subject: 'Novo Contato',
        text: "\n\t\tContato de: " + name + ",\n\n\t\tE-mail: " + from + ",\n\n\t\tMensagem:\n\n\n\t\t" + text + "\n\t",
        html: "\n\t\t<h1>Contato de: " + name + "</h2>\n\t\t<br>\n\t\t<h2>E-mail: " + from + "</h2>\n\t\t\n\t\t<h2>Celular: " + celular + "</h2>\n\t\t<br>\n\t\t<h3>Mensagem</h3>\n\t\t<strong>\n\t\t\t" + text + "\t\t\n\t\t</strong>\n\t\n\t"
    }).then(function (message) {
        return message;
    }).catch(function (err) {
        return err.message;
    });
}
exports.sendEmail = sendEmail;
