import hyperExpress from 'hyper-express';
import express from 'express';
import serveStatic from 'serve-static'
import path from 'path';

// const app = new express.Server();
const app = express();

app.use(serveStatic(path.join(import.meta.dirname, '../static')));


app.get('/api.js', (request, response) => {
    response.header('Content-Type', 'text/javascript');
    setTimeout(() => {
        response.send(`alert(1)`);
    }, 3000);
})

app.listen(3000);
