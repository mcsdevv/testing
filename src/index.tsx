import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import { IState } from './redux/types';

const store = createStore<IState, any, any, any>(reducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
