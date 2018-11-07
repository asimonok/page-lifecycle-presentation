import React from 'react';
import { renderToString } from 'react-dom/server.browser';
import App from '../App'

export default () => {
  const content = renderToString(
     <App />
  );
  return { content };
}
