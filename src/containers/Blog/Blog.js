import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }


    render () {



        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to={{
                                pathname: this.props.match.uri +'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link> </li>
                        </ul>
                    </nav>
                </header>

                {/*ROUTE MUST MATCH IF 'exact' is added ELSE path = 'STARTS WITH'*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/" render={() => <h1>Home 2</h1>} />*/}

                {/*Displaying components can be passed through this for specific pages*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
}

export default Blog;