import React from 'react'
import {Link} from 'react-router-dom'
const Portfolio = () => (
    <div>
    <h2>portfolio home page</h2>
    <p> The things I have done</p>
    <Link to="/portfolio/12">project 1</Link>
    <Link to='/portfolio/23'>Project 2</Link>
    </div>
)

export default Portfolio