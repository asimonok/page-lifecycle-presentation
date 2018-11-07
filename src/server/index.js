import express from 'express';
import template from './template';
import render from './render';


const app = express();

// Serving static files
app.use(express.static('dist'))

app.disable('x-powered-by');
app.listen(process.env.PORT || 3000);

// server rendered home page
app.get('/', (req, res) => {
  const { content }  = render()
  const response = template('Server Rendered Page', {}, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
