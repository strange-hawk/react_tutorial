import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import Graph from './Graph'

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userdetails: null,
            plot: null,
            history: null,
            showPlot: false,
            currentuser: {
                isBlocked: false,
                username: null
            }
        };
        this.onClick = this.onClick.bind(this);
        this.handleSupply = this.handleSupply.bind(this);
    }

    componentDidMount() {
        axios.get('http://smart-meter-guj.herokuapp.com/rest/user/' + this.props.match.params.username + '/?format=json')
            .then(res => {
                // console.log('user', res)
                const userdetails = res.data;
                this.setState({
                    userdetails: userdetails
                })
            });
        axios.get('http://smart-meter-guj.herokuapp.com/rest/user/record/' + this.props.match.params.username + '/?format=json')
            .then(res => {
                // console.log('record', res)
                const data = res.data;
                this.setState({
                    plot: data
                })
            });
        axios.get('http://smart-meter-guj.herokuapp.com/rest/user/bill/' + this.props.match.params.username + '/?format=json')
            .then(res => {
                // console.log('bill', res)
                const bills = res.data;
                this.setState({
                    history: bills
                })
            });
        axios.get('http://smart-meter-guj.herokuapp.com/rest/user/' + this.props.match.params.username + '/?format=json')
            .then(res => {
                // console.log('user', res)
                this.setState({
                    currentuser: {
                        ...this.state.currentuser,
                        isBlocked: res.data.meter_status,
                        username: this.props.match.params.username
                    }
                });
            })
    }

    onClick() {
        this.setState({ showPlot: !this.state.showPlot })
    }

    handleSupply() {
        const { username } = this.props.match.params
        axios.get('http://smart-meter-guj.herokuapp.com/rest/user/' + username + '/?format=json')
            .then(res => {
                axios.patch('http://smart-meter-guj.herokuapp.com/rest/user/' + username + '/', {
                    "meter_status": res.data.meter_status ? false : true
                });

                this.setState({
                    currentuser: {
                        ...this.state.currentuser,
                        isBlocked: res.data.meter_status ? false : true,
                        username: username
                    }
                });
            });
    }

    render() {
        let visible = this.state.showPlot;
        return (
            <div className='container'>
                {this.state.userdetails !== null ? (
                    <div className='user-details'>
                        <div className="user-info">
                            <p><span className="bold">Meter ID:</span> {this.state.userdetails.meter_id}</p>
                            <p><span className="bold">User Name:</span> {this.state.userdetails.user.username}</p>
                            <p><span className="bold">First Name:</span> {this.state.userdetails.user.first_name}</p>
                            <p><span className="bold">Last Name:</span> {this.state.userdetails.user.last_name}</p>
                            <p><span className="bold">Email:</span> {this.state.userdetails.user.email}</p>
                            <p><span className="bold">Phone Number:</span> {this.state.userdetails.contact_number}</p>
                            <div className="btns-div">
                                <Button variant="contained" color="primary" onClick={this.onClick}>
                                    Generate Graph
                            </Button>
                                <Button variant="contained" color="secondary" onClick={this.handleSupply}>
                                    {!this.state.currentuser.isBlocked ? "Unblock Supply" : "Block Supply"}
                                </Button>
                            </div>
                            {
                                console.log(this.state.plot)
                            }





                            <Card style={{ display: visible ? 'inline-block' : 'none', padding: '20px', marginTop: '40px' }}>
                                {visible && <Graph data= {this.state.plot} ></Graph>}
                                
                            </Card>







                        </div>
                        <div>
                            <p><span className="bold">History:</span></p>
                            <Card className="bill">
                                {this.state.history !== null ? (
                                    <div>
                                        {this.state.history.map((data) =>
                                            <div className="bill-details">
                                                <div className="card">
                                                    <p><span className="bold">Time:</span> {data.time}</p>
                                                    <p><span className="bold">Amount:</span> {data.cost}</p>
                                                    <p><span className="bold">Paid?</span> {data.is_paid ? "Yes!" : "No!"}</p>
                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                ) : null}
                            </Card>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default UserDetails;