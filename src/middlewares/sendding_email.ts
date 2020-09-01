import nodemailer from 'nodemailer';

export function sendEmail(name: string, from: string, text: string, celular: string) {

    let transporter = nodemailer.createTransport({
	
		//porta smtp
		host: 'smtp.gmail.com',
		//porta smtp do gmail
        port: 587,
        secure:false,
        
		auth: {
			user: 'henrique.p.espindola@gmail.com',
			pass: 'rosa1702',

		}
});


transporter.sendMail({
	from: `${name} |${from}| --> <${from}>`,
	to: "henrique.p.espindola@gmail.com",
	subject: 'Novo Contato',
	text: `
		Contato de: ${name},\n
		E-mail: ${from},\n
		Mensagem:\n\n
		${text}
	`,

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