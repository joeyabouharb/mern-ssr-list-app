/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
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

server.use( express.static( path.resolve( __dirname, "../../dist/" ) ) );
server.locals.serialize = serialize;

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

import routes from './api/apiRoutes';

server.use('/api', routes);

import {renderToString} from 'react-dom/server';
import React from 'react';
import App from '../client/components/app';
import { StaticRouter, matchPath } from 'react-router-dom';
import routeController from '../routes/routeController';
server.get('*', (req, res, next) => {
  const activeRoute = routeController.find((route) => matchPath(req.url, route)) || {};
  const path = req.url.split('/').filter(el => el).pop();
  const promise = activeRoute.service
  ? activeRoute.service(path)
  : Promise.resolve()


promise.then((data) => {
  const context = { data };

  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

    res.render('index', {data, markup});
}).catch(next)
  
});

server.listen(8080, () => console.log('Server is running...'));