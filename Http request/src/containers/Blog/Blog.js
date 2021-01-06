import React, { Component } from 'react';
import axios from 'axios'

// import Post from './Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import NewPost from '../../components/NewPost/NewPost'
// import FullPost from '../../containers/Blog/Post/Post'
import FullPost from './FullPost/FullPost'

class Blog extends Component {



    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* {<li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>} */}
                            <li><NavLink to="/posts/" activeClassName="active" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* {<Route path="/"  render={()=> <h1>Home</h1>} />
                <Route path="/"  render={()=> <h1>Home2</h1>} />} */}
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts/" />
                </Switch>
            </div>
        );
    }
}

export default Blog;

{/* <section>
<FullPost id={this.state.selectedPostID}/>
</section>
<section>
<NewPost />
</section> */} 