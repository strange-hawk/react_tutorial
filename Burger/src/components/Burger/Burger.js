import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from 'react-router-dom'

const burger = (props) => {
    // console.log('burger', props)
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((prev,curr)=>prev.concat(curr) ,[])
    if(transformedIngredients.length == 0){
    transformedIngredients = <p>Please add ingredients</p>
    }
    // console.log(transformedIngredients)
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default withRouter(burger)