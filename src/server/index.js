import express from 'express';
// import path from 'path'
import template from './template';
import render from './render';


const app = express();

// Serving static files
app.use(express.static('dist'))
// app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
// app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

// // our apps data model
// const data = require('./assets/data.json');
//
// let initialState = {
//   isFetching: false,
//   apps: data
// }

// server rendered home page
app.get('/', (req, res) => {
  const { content }  = render()
  const response = template('Server Rendered Page', {}, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
