import React, { Component } from 'react'
import { } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'


const navStyle= {
    color:'white',
    decoration: 'none'
}
const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav