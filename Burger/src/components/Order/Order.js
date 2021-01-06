import React from 'react'



const order = (props) => {
    const ingredients = []
    for(let ing in props.ingredients){
        ingredients.push({name : ing, amount : props.ingredients[ing]} )
    }

    // console.log(ingredients)
    const ingredientOutput = ingredients.map(ig => {
    return <span style={{textTransform:'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'}} key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className="Order">
            <p>Ingredidents : {ingredientOutput}</p>
            <p>Price : <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default order