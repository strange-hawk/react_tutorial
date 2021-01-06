import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './src/styles/styles.scss'
import App from './App';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import Counterreducer from './src/store/reducers/counter'
import Resultreducer from './src/store/reducers/result'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    ctr : Counterreducer,
    res : Resultreducer
})


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleman] dispatching', action)
            const result = next(action)
            console.log('[Middleware] next state', store.getState())
            return result
        }
    }
} 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore( rootReducer, composeEnhancer(applyMiddleware(logger, thunk) ))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
