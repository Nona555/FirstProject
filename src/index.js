import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { reducers } from './redux/reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'


// Action
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// Reducers
// function counterReducer(state = 0, action) {
//     switch(action.type) {
//         case 'INCREMENT': return state += 10;
//         case 'DECREMENT': return state -= 1;
//         default: return state;
//     }
// }


// Dispatch

// Store
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store);
// Subscribe
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(decrement())
// store.dispatch(increment())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
