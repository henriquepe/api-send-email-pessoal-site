import nodemailer from 'nodemailer';
import {authData} from './auth';


export function sendEmail(name: string, from: string, text: string, celular: string) {

	const {user, pass} = authData;

    let transporter = nodemailer.createTransport({
	
		//porta smtp
		host: 'smtp.umbler.com',
		//porta smtp do gmail
        port: 587,
		secure: false,
		
        
		auth: {
			user,
			pass,
		}
});


transporter.sendMail({
	from: `${name} |${from}| --> <${user}>`,
	to: `${user}`,
	subject: `Novo Contato (${name})`,


	html: `
		<h1>Contato de: ${name}</h2>
		<br>
		<h2>E-mail: ${from}</h2>
		
		<h2>Celular: ${celular}</h2>
		<br>
		<h3>Mensagem</h3>
		<strong>
			${text}		
		</strong>
	
	`
	
    }).then((message) => {
        return message;

    }).catch(err => {
        return err.message;
    })

}