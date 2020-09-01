import cors from 'cors';

import express from 'express';
import routes from './rotas_email/routes';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server is working on port ${PORT}`);
})