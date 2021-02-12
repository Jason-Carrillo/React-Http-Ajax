import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'

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
                            <li> <NavLink
                                to="/posts"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underlined'
                                }} >Posts</NavLink> </li>
                            <li> <NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>

                {/*ROUTE MUST MATCH IF 'exact' is added ELSE path = 'STARTS WITH'*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/" render={() => <h1>Home 2</h1>} />*/}

                {/*Displaying components can be passed through this for specific pages*/}
                <Switch >
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;