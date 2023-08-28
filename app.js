import express from 'express';
import productsRouter from './api/products/router.products.js';
import usersRuoter from './api/users/router.users.js'
import morgan from 'morgan';
import cors from 'cors';

const port = 8200;
const app = express();

app.use(express.json());

app.use(morgan('dev'))


const corsOptions = {
    origin: 'https://exemple-store.netlify.app', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('API Deployed 🚀')
})

app.use('/api/products', productsRouter)
app.use('/api/users', usersRuoter)

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
