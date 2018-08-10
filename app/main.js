
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components';
import { appstore } from './store';



render(
    <Provider store={appstore}>
    <div><App /></div>
  </Provider>,
  document.getElementById('root')
)