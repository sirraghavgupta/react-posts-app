import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import './Blog.css';
import { Route } from 'react-router-dom';


class Blog extends Component {

    render () {
        console.log("=== render of [BLOG]");

        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            
                {/* <Route path='/' exact render = { ()=><h1>home</h1> }/>
                <Route path='/' render = { ()=><h1>home2</h1> }/> */}

                {/* <Route path='/' render = { ()=><Posts/> }/> */}

                {/* we use the component prop and we need to pass a refernce 
                of the functional or the class component. */}
                <Route path='/' component = {Posts}/>

            </div>
        );
    }
}

export default Blog;


/**
 * so, route is a self closing tag. 
we can use as many route tags as we want and annywhere in the code, 
may be nested inside a div or anything like that. 

it requires the path prop, which route uses to match with the current 
active path. it checks that it should only start with that mentioned in
the path prop. else after that anything could be there in the active path.

we need the exact prop if we want exact matching.

inside render, we can render any JSX code or any component. route replaces
itself with what render returns. 

it checks each and every route component on the page and render all
of the matching routes. 
 */