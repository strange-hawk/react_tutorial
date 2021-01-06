import {BrowserRouter,Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react';

import NotFoundPage from './../components/NotFoundPage.js'
import Header from './../components/Header'
import HomePage from './../components/HomePage'
import Portfolio from './../components/Portfolio'
import PortfolioId from './../components/PotfolioId'
import Contact from './../components/Contact'








const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/portfolio" component={Portfolio} exact={true}/>
            <Route path="/portfolio/:id" component = {PortfolioId}/>
            <Route path="/contact" component={Contact} />
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter