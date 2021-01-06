import React, { Component } from 'react';
import axios from 'axios'

class FullPost extends Component {
    state = {
        loadedPost : null,
        // isdeleted : false
    }

    componentDidMount(){
        // console.log(this.props)
        // if(this.props.match.params.id){
        //     if((!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) )
        //     axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        //     .then(response => {
        //         this.setState({loadedPost : response.data, isdeleted: false})
        //         // console.log(response.data)
        //     })
        // }
        this.loadData()
    }
    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response => {
            // console.log(response)
            console.log(response);
        
        })
    }
    componentDidUpdate(){
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( 'https://jsonplaceholder.typicode.com/posts/' +'/'+ this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    render () {
        console.log(this.props)
        let post = <p style={{textAlign : 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            <p style={{textAlign : 'center'}}>Loading ....</p>;
        }
        if(this.state.loadedPost && !this.state.isdeleted){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div  className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            )
        }
        

        
        return post;
    }
}

export default FullPost;