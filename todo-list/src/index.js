import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import modules from './modules';                // combinedReducer == reducer
import {createStore} from 'redux';
import {Provider} from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    modules, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
/* eslint-enable */

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
