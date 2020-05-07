import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';

class Blog extends Component {

    state = {
        posts : []
    }

    componentDidMount = () => {
        console.log("mounting the blog");

        axios.get("https://jsonplaceholder.typicode.com/posts")
             .then( response => {
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
             });
    }
    
    componentDidUpdate = () => {
        console.log("updating the blog");
    }

    render () {
        
        const posts = this.state.posts.map( 
            (post) => <Post title = {post.title}
                            author = {post.author}
                            key = {post.id} />
        );

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>

                <section>
                    <FullPost />
                </section>

                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;