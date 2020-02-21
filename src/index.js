import React from 'react';
import ReactDOM from 'react-dom';
// 1 - import de store redux et le provider
import { createStore } from 'redux';
import  { Provider } from 'react-redux';

// 2 - import  reducer
import lightReducer from './lightReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 3 - creation of the store ---> redux dev tool second line
const store = createStore(lightReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

// 4 -  Add the provider into the app & propertie of the store
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
