import express from 'express';
import spdy from 'spdy';
import fs from 'fs';
import template from './template';
import render from './render';

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./server.crt'),
};

const app = express();

// Serving static files
app.use(express.static('dist'));

app.disable('x-powered-by');

const clientCss = fs.readFileSync('./dist/client.css')
const fontWoff = fs.readFileSync('./dist/fonts/OpenSansRegular.woff')

// server rendered home page
app.get('/', (req, res) => {
  const clientStream = res.push('/client.css', {
    request: {
      accept: '*/*'
    },
    response: {
      'content-type': 'text/css',
    }
  })
  clientStream.on('error', () => {
    console.log('stream error')
  })
  clientStream.end(clientCss)

  const fontWoffStream = res.push('/fonts/OpenSansRegular.woff', {
    request: {
      accept: '*/*'
    },
    response: {
      'content-type': 'application/font-woff',
    }
  })
  fontWoffStream.on('error', () => {
    console.log('stream error')
  })
  fontWoffStream.end(fontWoff)

  const { content }  = render()
  const response = template('Server Rendered Page', {}, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.end(response)
});

spdy
  .createServer(options, app)
  .listen(3000)

