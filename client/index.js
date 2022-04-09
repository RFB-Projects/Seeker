import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import { store } from './app/store';
// import { Provider } from 'react-redux';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>,
  // document.getElementById('app')
);
