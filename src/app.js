import express from 'express';
import mustacheExpress from 'mustache-express';
import { SERVER } from './constants.js';
import router from './router.js';
import './dataLoader.js';

const app = express();

// Use Render's PORT in production, fallback to constants for local dev
const PORT = process.env.PORT || SERVER.PORT;
const HOST = process.env.HOST || SERVER.HOST;

app.use(express.static('./public'));
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), '.html');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Web ready at http://${HOST}:${PORT}/`);
});