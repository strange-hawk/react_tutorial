import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'


class Checkout extends Component {
    

    // componentWillMount() {
    //     console.log(this.props)
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients = {}
    //     let price = 0
    //     for (const key of query.entries()) {
    //         // console.log(key)
    //         if (key[0] === 'price') {
    //             price = key[1]
    //         }
    //         else {
    //             ingredients[key[0]] = +key[1]
    //         }
    //     }
    //     this.setState({ ingredients, totalPrice : price })

    // }

    onCheckoutCompletedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings} onCheckoutCancelled={this.onCheckoutCancelledHandler} onCheckoutCompleted={this.onCheckoutCompletedHandler} />
                {/* {<Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.props.ings} {...this.props}/>} />} */}
                {/* <ContactData /> */}
                <Route path={this.props.match.path + '/contact-data'} component = {ContactData}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}




export default connect(mapStateToProps)(Checkout)