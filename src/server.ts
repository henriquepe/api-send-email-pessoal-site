import cors from 'cors';

import express from 'express';
import routes from './rotas_email/routes';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333, () => {
    console.log('server is working on port 3333');
})