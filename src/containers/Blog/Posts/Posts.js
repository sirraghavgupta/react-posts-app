import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../Axios';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component{

    state = {
        posts : []
    }

    selectPostHandler = (id) => {
        console.log("click handler - selected post ", id);
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
                    <Link to={"/" + post.id}
                          key = {post.id} >
                              
                        <Post title = {post.title}
                              author = {post.author}
                              // {...this.props}
                              clicked = {()=>{this.selectPostHandler(post.id)}}
                        />
                    </Link>)
                    );
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;