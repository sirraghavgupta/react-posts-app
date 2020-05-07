import React, { Component } from 'react';

import './Post.css';

class Post extends Component{

    componentDidMount = () => {
        console.log("mounting the post");
    }
    
    componentDidUpdate = () => {
        console.log("updating the post");
    }

    render(){

        return (
            <article className="Post">

                <h1>Title</h1>

                <div className="Info">
                    <div className="Author">Author</div>
                </div>

            </article>
        );
    }
}

export default Post;