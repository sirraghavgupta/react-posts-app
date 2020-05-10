import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

/**
 * when we write normal import statements, we are just telling the webpack 
 * to bundle that together. 
 * in this new syntax of creating a const, we are just telling the compiler
 * to create a separate chunk for this component. 
 * we can see this extra chunk in the network tab in dev tools also. 
 */
const AsyncNewPost = asyncComponent( ()=> {
    /**
     * this import method says that it will import whatever is written in the 
     * parenthesis, dynamically. it also comes with create-react-app setup.
     * 
     * import method ensures that the component will be loaded only when its
     * rendered.  
     */
    return import('./NewPost/NewPost');
} );


class Blog extends Component {

    state = {
        authenticated : true
    }

    componentDidMount = () => {
        console.log("mounting [ BLOG ]");
        // console.log(this.props);
    }
    
    componentDidUpdate = () => {
        console.log("updating [ BLOG ]");
    }

    componentWillUnmount = ()=>{
        console.log("unmounting [ BLOG ]");
    }

    render () {
        console.log("rendering [ BLOG ]");

        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>

                         <li><NavLink to = "/posts" 
                                      activeClassName = "my-active">Home</NavLink></li>

                         {/* <li><Link to = "/new-post">New Post</Link></li> */}

                         <li><NavLink to = {{ 
                             pathname : "/new-post",
                             hash : "submit",
                             search : "?quick-submit=true"
                          }} 
                          activeStyle = {{
                              backgroundColor : 'lightgreen'
                          }}
                          >New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
            
                {/* <Route path='/' exact render = { ()=><h1>home</h1> }/>
                <Route path='/' render = { ()=><h1>home2</h1> }/> */}

                {/* <Route path='/' render = { ()=><Posts/> }/> */}

                {/* we use the component prop and we need to pass a refernce 
                of the functional or the class component. */}

                <Switch>    

                    {this.state.authenticated ? 
                        <Route path='/new-post' component = {AsyncNewPost} /> : 
                        null}
                    <Route path='/posts' component = {Posts}/>
                    
                    {/* one way of redirection.
                    <Route path='/' component = {Posts}/> */}
        
                {/* to handle 404 routes */}
                <Route render = {()=><h1>Not Found</h1> }/>

                    {/* <Redirect from="/" to="/posts"/> */}

                </Switch>

                {/* <Redirect to="/posts"/> */}


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


/**
 * we saw that react router passes on some extra props to the rendered 
 * components. like history, match and location. 
 * but it doesnt pass them to the children of the rendered component. 
 * so, either we pass them by spreading. 
 * or we use the withRouter() to wrap the child component. 
 */


/**
 * ABSOLUTE AND RELATIVE PATHS -->
 * note that what ever we give in the pathname prop
 * pathname : "/new-post",
 * is always an absolutre path. 
 * absolute path is what which is generated by appending the mentoned path
 * with your domain name. 
 * 
 * while relative path takes up the url of the current page we are on and 
 * then append to it. 
 * 
 * like, i am on example.com/posts and now i make a route to /new-post
 * then absolute path will be example.com/new-post
 * while relative path will be example.com/posts/new-post.
 * 
 * we can generate relative path by 
 * pathname : this.props.match.url + '/new-post'
 * 
 * also, whether u write '/new-post' or 'new-post' while creating an 
 * absolute path, it will be the same at the end. 
 */


/**
* styling active links - 
* we need to use NavLink instead of Link.
* it comes with an active class added on the link when its active. 
* implementation of the class is to be provided by us. 
* we can use a different class though, by activeClassName prop.
* we can also give the inline style by activeStyle prop. 
* 
* note that we need to use exact because it considers the to prop as
* prefixes while matching. so, see below. 
*/

/**
 * PREFIXING - how it works. 
 * if i try to visit /new-posts it considers all the links which act as 
 * a prefix in this link, it renders them also. 
 * like in /new and /new-post, it also shows the content of /
 * same thing applies to styling also. 
 * when i am on /new-post, it applies the styling to / also, as it 
 * considers that its also active. 
 * i am able to get the content of / in /new- also even though its not 
 * a route. 
 */


/**
 * SWITCH ===== 
 * /new-post
 * /:id
 * if we place the routes in this order, then when we load the full post, 
 * it works fine but when we load new post, it renders the full post also 
 * with the old id. 
 * this is bcoz react always renders all the routes which match and 
 * new-post also matched :id.
 * 
 * so, we have Switch component which tells react to load only one of the 
 * routes which are inside the switch. the first one that matches. 
 */



/**
 * GUARDS --------------  
 * guards are like which prevent to load a page when the user is not authenticated. 
 * here the working is different from other frameworks.
 * we render the route conditionally and if not authenticated, we redirect 
 * the page. 
 * another method is that we authenticate the user in componentDidMount and 
 * then redirect using push or replace methods.
 */

 /**
  * if we want to handle 404 routes, we see that we can either use redirect
  * or we can use this Route with no path attribute and use the render method 
  * with that as we did above. 
  * it will catch everything which is not caught above that.
  * but they noth will nott work together. 
  */
