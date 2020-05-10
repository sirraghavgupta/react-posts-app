import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../Axios';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{

    state = {
        posts : []
    }

    selectPostHandler = (id) => {
        console.log("click handler - selected post ", id);
        // this is the way we make requests programatically. 
        this.props.history.push("/posts/"+id);
    }

    componentDidMount = () => {
        console.log("mounting the posts component");

        // console.log(this.props);

        axios.get("/posts")
             .then( response => {
                console.log("*** got data from api inside [POSTS]");
                console.log(response);
                const updatedData = response.data.slice(0, 4).map(
                    (post) => {
                        return {
                            ...post,
                            author : 'Max'
                        }
                    }
                );
                this.setState( {posts : updatedData} );
             }).catch( 
                 error => {
                    console.log("---- inside the local error hadler ----");
                    console.log(error);
                });
    }
    
    componentDidUpdate = () => {
        console.log("updating the blog");
    }

    render(){
        console.log("=== render of [POSTS]");
        let posts = <p>Something went wrong!!!</p>

        if(!this.state.error){
            posts = this.state.posts.map( 
                (post) => (
                    // <Link to={"/posts/" + post.id}
                    //       key = {post.id} >

                        <Post title = {post.title}
                              author = {post.author}
                              // {...this.props}
                              key = {post.id}
                              clicked = {()=>{this.selectPostHandler(post.id)}}
                        />
                    // </Link>
                    )

                    );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component = {FullPost} />
            </div>
        );
    }

}

export default Posts;

/**
 * if we want to make a requests programatically, then we can use the 
 * history object in the route props. it gives several methods like 
 * goForward and goBack also which are just same as the backward and forward 
 * arrow buttons in the browser. 
 * these pages are just like a stack where we want to go back means the previous 
 * page in the stack. and forward means the page which was last popped.
 * kind of stuff. 
 */


 /**
  * one issue we encountered in the app is that, 
  * our home page is named /
  * now, its showing the posts. 
  * when we show the full post, no link is active. 
  * but it should be there. so, if we rename home to posts, then it should be the 
  * one to be active. but unfortunately we cant do that because of the routing 
  * behaviour. bcoz if we remove the exact prop, then it starts getting highlighed 
  * on new-posts route also. so, we need to change the route from / to /posts 
  * actually.       
  */