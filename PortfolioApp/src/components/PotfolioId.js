import React from 'react'
import {Link} from 'react-router-dom'
const PortfolioId = (props) => (
    <div>
        <h2>Projects</h2>
        <p> this is under the portfolio page with id {props.match.params.id} </p>
        
    </div>
)
export default PortfolioId