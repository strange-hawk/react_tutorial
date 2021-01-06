import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import {increment, decrement, add, subtract, store_result,delete_result} from '../../store/actions/index'


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    delete = (ind) => {
        const resultArr = [...this.props.results]
        resultArr.splice(ind,1)
        console.log(resultArr)

    }

    render() {
        
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={() => this.props.onStore(this.props.ctr)}> Store results </button>
                <ul>
                    {/* {this.props.results.map((res,ind) => <li key={ind} onClick={() => this.delete(ind)}>{res}</li>)} */
                        this.props.results.map((res,ind) => <li key={ind} onClick={() => this.props.onDelete(ind)}>{res}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAdd: () => dispatch(add(5)),
        onSubtract: () => dispatch(subtract(5)),
        onStore: (res) => dispatch(store_result(res)),
        onDelete: (ind) => {
            console.log(ind)
            return dispatch(delete_result(ind))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);