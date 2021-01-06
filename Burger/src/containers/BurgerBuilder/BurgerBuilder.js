import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actionTypes from './../../store/actions'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        // ingredients: null,
        // totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error : false
    }

    componentDidMount() {
        // console.log('burgerBuuilder',this.props)
        // axios.get('https://react-my-burger-902c0.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data })
        //     })
        //     .catch(err =>{this.setState({ error: true})})
    }

    updatePurchase(ing) {
        const ingredients = ing
        const sum = Object.keys(ingredients).map((key) => ingredients[key]).reduce(((prev, start) => prev + start), 0)
        return sum>0
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     const updatedCount = oldCount + 1
    //     // const updatedIngredients = Object.assign({},this.state.ingredients)
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCount
    //     const priceAddition = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice + priceAddition
    //     this.setState(() => ({ totalPrice: newPrice, ingredients: updatedIngredients }))
    //     this.updatePurchase(updatedIngredients)
    // }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     if (oldCount <= 0) {
    //         return
    //     }
    //     const updatedCount = oldCount - 1
    //     // const updatedIngredients = Object.assign({},this.state.ingredients)
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCount
    //     const priceDeduction = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice - priceDeduction
    //     this.setState(() => ({ totalPrice: newPrice, ingredients: updatedIngredients }))
    //     this.updatePurchase(updatedIngredients)
    // }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // alert('you contniue')
        // this.setState({ loading: true })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'animesh',
        //         address: {
        //             street: 'shantipuram',
        //             city: 'lucknow',
        //             country: 'india'
        //         },
        //         email: 'test@gmail.com'
        //     },
        //     delivery: 'fast'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => this.setState({ loading: false, purchasing: false }))
        //     .catch(err => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
        // const queryParam = []
        // for(let i in this.state.ingredients){
        //     queryParam.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParam.push('price='+this.props.price)
        // const queryString = queryParam.join("&")
        this.props.history.push('/checkout')
    }


    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        
        

        let burger = this.state.error ? <p>ingreidents can't be loaded</p> :<Spinner style={{marginTop : '20px'}}/>

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings } />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchase(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            )
            orderSummary = <OrderSummary ingredients={this.props.ings} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} price={this.props.price.toFixed(2)} />
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
            {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price : state.totalPrice
    }
}  

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientType : ingName}),
        onIngredientRemove : (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientType : ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))