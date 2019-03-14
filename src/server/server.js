/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//middlewares
const server = express();

/* set up mongoose to connect to our MongoDb server */
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://admin:Admin123@joeycluster-qflzr.mongodb.net/noteDB?retryWrites=true');
const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.once('open', () => {
  console.log('Connected to Database');
});

// set up view render engine
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'ejs');
server.use(express.static('public'));

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

import routes from './api/apiRoutes';

server.use('/api', routes);

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../client/components/app';
import { StaticRouter } from 'react-router-dom';

server.get('*', (req, res) => {
    

      const context = {}

    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
    res.render('index', {markup});

});

server.listen(8080, () => console.log('Server is running...'));