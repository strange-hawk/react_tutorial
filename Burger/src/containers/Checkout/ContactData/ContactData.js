import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'


class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: '',
                vallidation:{
                    required : true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                vallidation:{
                    required : true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'PinCode'
                },
                value: '',
                vallidation:{
                    required : true,
                    minLength : 6,
                    maxLength: 6
                },
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                vallidation:{
                    required : true
                },
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig : {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                vallidation:{
                    required : true
                },
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig : {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                vallidation:{},
                value: '',
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }
    orderHandler = (e) => {
        e.preventDefault()
        this.setState({ loading: true })

        const formData = {}

        for(let formElemId in this.state.orderForm){
            formData[formElemId] = this.state.orderForm[formElemId].value
        }

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData 
        }
        // console.log(this.props.price)
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
                // console.log(this.state.price)
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }

    checkValidity(value, rules){
        let isValid = true
        if(rules.required){
            isValid = value.trim() !== '' && isValid
        }

        if(rules.minLength){
            isValid = value.trim().length >= rules.minLength && isValid
        }

        if(rules.maxLength){
            isValid = value.trim().length <= rules.maxLength && isValid
        }
        return isValid
    }

    inputChangeHandler = (event,id) => {
        // console.log(event.target)
        const updatedForm = {...this.state.orderForm}
        const updatedFormElem = updatedForm[id]
        updatedFormElem.value= event.target.value
        updatedFormElem.valid = this.checkValidity(updatedFormElem.value, updatedFormElem.vallidation)
        updatedFormElem.touched = true
        updatedForm[id] = updatedFormElem
        // console.log(updatedFormElem)

        let formIsValid = true
        for (let key in updatedForm){
            formIsValid = !!updatedForm[key].valid && formIsValid
        }
        this.setState({orderForm : updatedForm, formIsValid: true})

    }

    formHandler=(event) =>{
        console.log(event)
    }

    render() {

        

        const formElementsArray = []
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        // console.log(formElementsArray)

        let form = (
            <form onSubmit={this.formHandler}>
                {formElementsArray.map(form=> (
                    <Input 
                    key={form.id}
                    elementType={form.config.elementType}
                    elementConfig={form.config.elementConfig}
                    value={form.config.value} 
                    invalid = {!form.config.valid}
                    shouldValidate={form.config.vallidation}
                    touched = {form.config.touched}
                    changed={(event) => this.inputChangeHandler(event,form.id)}/>
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>enter contact data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price : state.totalPrice
    }
}

export default connect(mapStateToProps) (ContactData)