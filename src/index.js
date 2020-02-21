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

<<<<<<< HEAD
// 3 - creation of the store ---> redux dev tool second line
const store = createStore(lightReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
=======
// 3 - creation of the store
const store = createStore(lightReducer);
>>>>>>> 958a3b856da5a536d75d3113155abb93bb67b3b5

// 4 -  Add the provider into the app & propertie of the store
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
