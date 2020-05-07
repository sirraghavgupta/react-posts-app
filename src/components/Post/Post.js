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
            <article className="Post" onClick = {this.props.clicked}>

                <h1>{this.props.title}</h1>

                <div className="Info">
                    <div className="Author">{this.props.author}</div>
                </div>

            </article>
        );
    }
}

export default Post;