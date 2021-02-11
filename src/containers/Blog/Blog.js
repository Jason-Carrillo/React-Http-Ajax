import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'

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
                            <li> <a href="/">Home</a> </li>
                            <li> <a href="/new-post">New Post</a> </li>
                        </ul>
                    </nav>
                </header>

                {/*ROUTE MUST MATCH IF 'exact' is added ELSE path = 'STARTS WITH'*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/" render={() => <h1>Home 2</h1>} />*/}

                {/*Displaying components can be passed through this for specific pages*/}
                <Route path="/" exact component={Posts} />

            </div>
        );
    }
}

export default Blog;