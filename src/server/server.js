/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../client/components/app';
import { StaticRouter } from 'react-router-dom';
//middlewares
const server = express();
// set up view render engine
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('*', (req, res) => {
    const context = {};
    console.log(req.url)
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
    res.render('index', {markup});

});

server.listen(8080, () => console.log('Server is running...'));