import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import About from './components/about'
import Shop from './components/shop'
import Nav from './components/Navbar/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
const App = (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path='/about' component={About} />
                <Route exact path='/shop' component={Shop} />
                <Route path="/shop/:id" component={ItemDetail} />
                <Route path='/' component={Home} />
            </Switch>
            {/* <Shop /> */}
        </div>
    </Router>
)

ReactDOM.render(App, document.getElementById('app'));
