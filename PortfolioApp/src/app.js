import React from 'react';
import ReactDOM from 'react-dom';

import history from './components/History'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

// const createBrowserHistory = require("history").createBrowserHistory
// const history = require("history").createBrowserHistory()


ReactDOM.render(<AppRouter />, document.getElementById('app'));
