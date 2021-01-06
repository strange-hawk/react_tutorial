import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom'
// import * as ServiceWorker from './services/ServiceWorker'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
