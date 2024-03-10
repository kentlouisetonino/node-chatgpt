require('dotenv').config();
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import RootRoute from './routes/RootRoute';
import OpenAIRoute from './routes/OpenAIRoute';

// Express application instance.
const app = express();

// App middlewares.
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', RootRoute);
app.use('/api/openai/', OpenAIRoute);

// Separate app and server.
export default app;
