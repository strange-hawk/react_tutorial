import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import {Switch} from 'react-router-dom'

const navigationItems = (props) => (
    <ul className="NavigationItems">
            <NavigationItem link="/" activeClassName="active" exact font={"9.25px"}> Burger Builder</NavigationItem>
            <NavigationItem link="/orders" font={"small"} activeClassName="active"> Orders</NavigationItem>
    </ul>
)

export default navigationItems