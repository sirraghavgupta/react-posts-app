import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, Link } from 'react-router-dom';


class Blog extends Component {

    render () {
        console.log("=== render of [BLOG]");

        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>

                         <li><Link to = "/">Home</Link></li>

                         {/* <li><Link to = "/new-post">New Post</Link></li> */}

                         <li><Link to = {{ 
                             pathname : "/new-post",
                             hash : "submit",
                             search : "?quick-submit=true"
                          }}>New Post</Link></li>

                        </ul>
                    </nav>
                </header>
            
                {/* <Route path='/' exact render = { ()=><h1>home</h1> }/>
                <Route path='/' render = { ()=><h1>home2</h1> }/> */}

                {/* <Route path='/' render = { ()=><Posts/> }/> */}

                {/* we use the component prop and we need to pass a refernce 
                of the functional or the class component. */}
                <Route path='/' exact component = {Posts}/>

                <Route path='/new-post' component = {NewPost} />

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

 /**
  * however we are able to click the links to render different pages, 
  * actually the whole app is getting reloaded and the state gets lost.
  * which is not desired. and we didnt use react for this thing. 
  * this actually is happening because of the a tags. they work like that. 
  * so, we need to correct this so that we rerender the app, not reload. 
  */


/**
 *  now link tag is internally the a tag which is 
 *  managed by react so that it doesnt reload the app.
 * 
 *  we can give additional props inside the to prop in the form of JS object.
 *  like hash - we give the id of an element here, and we can jump to that 
 *  on the page by this. its the normal use.
 *  
 * search is used to give query parameters. 
 */