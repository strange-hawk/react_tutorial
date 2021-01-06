import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layer extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerCLosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    SideDrawerOpenHandler = () => {
        this.setState((prevState) => ({showSideDrawer : !prevState.showSideDrawer}))
    }
    render() {
        return (
            <Aux>
                <Toolbar open = {this.SideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCLosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layer