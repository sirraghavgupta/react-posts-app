import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

// import Axios from 'axios';
import Axios from '../../Axios';

class Blog extends Component {

    state = {
        posts : [],
        selectedPostId : null,
        error : false
    }

    selectPostHandler = (id) => {
        this.setState( {selectedPostId : id} );
        console.log("click handler - selected post ", id);
    }

    componentDidMount = () => {
        console.log("mounting the blog");

        Axios.get("/posts")
             .then( response => {
                console.log("*** got data from api inside [BLOG]");
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
                    this.setState( { error:true } );
                    console.log("---- inside the local error hadler ----");
                    console.log(error);
                });
    }
    
    componentDidUpdate = () => {
        console.log("updating the blog");
    }

    render () {
        console.log("=== render of [BLOG]");

        let posts = <p>Something went wrong!!!</p>

        if(!this.state.error){
            posts = this.state.posts.map( 
                (post) => <Post title = {post.title}
                                author = {post.author}
                                key = {post.id} 
                                clicked = {()=>{this.selectPostHandler(post.id)}}/>
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>

                <section>
                    <FullPost id = { this.state.selectedPostId }/>
                </section>

                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;