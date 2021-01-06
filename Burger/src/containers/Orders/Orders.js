import React, { Component } from 'react'
import axios from '../../axios-orders'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state = {
        orders : [],
        loading : true
    }
    componentDidMount () {
        axios.get('/orders.json')
        .then(res => {
            // console.log(res.data)
            const fetchedOredrs = []
            for(let i in res.data){
                fetchedOredrs.push({
                    ...res.data[i],
                    id : i
                })
                this.setState({orders : fetchedOredrs})
                // console.log(this.state)
            }
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(item => (
                    <Order key={item.id} ingredients={item.ingredients} price={Number.parseFloat(item.price).toFixed(2)}/>
                ))}
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios)