import {Router} from 'express';
import {sendEmail} from '../middlewares/sendding_email';


const routes = Router();


routes.post('/', (request, response) => {

    
        const {name, from, text, celular} = request.body;

        const message = sendEmail(name, from, text, celular);

        return response.json({message: message})
    
    
})

export default routes;