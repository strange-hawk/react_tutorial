import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it taste well</h1>
            <div >
                <Burger ingredients={props.ingredients} />
            </div>
            <div style={{height: '40px', marginTop:'60px'}}></div>
            <Button btnType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onCheckoutCompleted}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary