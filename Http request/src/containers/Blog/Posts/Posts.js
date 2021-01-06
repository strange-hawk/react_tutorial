import React, { Component } from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import { Link, Route } from 'react-router-dom'
import FullPost from './../FullPost/FullPost'

export default class Posts extends Component {
    state = {
        posts: [],
        selectedPostID: null
    }


    postSelectedHandler = (id) => {
        // this.setState(() => ({ selectedPostID: id }))
        // this.props.history.push('/this.props.match.url}/' + id)
        this.props.history.push(`${this.props.match.url}${id}`)
    }


    componentDidMount() {
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 6)
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPost })
                // console.log(response)
            })
            .catch(error => console.log('error'))
    }


    render() {
        const posts = this.state.posts.map((post) => {
            return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
            )
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url+'/'+':id'} exact component={FullPost}/>
            </div>
        )
    }
}
