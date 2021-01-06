import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../../components/UI/Button/Button'

class orderSummary extends Component {
    componentWillUpdate(){
        console.log('[ordersummary] will update') 
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map((key) => (<li key={key}><span style={{ textTransform: 'capitalize' }}>{key}</span>:{this.props.ingredients[key]}</li>))
        return (
            <Aux>
                <div className="Modal">
                    <h3>Your order</h3>
                    <p>A delicious burge with following ingredients : </p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total price : {this.props.price}</strong></p>
                    <p>Continue to checkout</p>

                    <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
                </div>
            </Aux>
        )
    }
}

export default orderSummary