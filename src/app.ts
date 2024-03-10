require('dotenv').config();
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

// Express application instance.
const app = express();

// App middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

// Separate app and server.
export default app;
