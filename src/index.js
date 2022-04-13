import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './router/App';
import { store } from './store/store';
import { GlobalStyle } from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
