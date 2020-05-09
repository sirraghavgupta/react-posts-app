import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

class Post extends Component{

    componentDidMount = () => {
        console.log("mounting the post");
    }
    
    componentDidUpdate = () => {
        console.log("updating the post");
    }

    render(){
        console.log("=== render of [POST]");
        console.log(this.props);

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

// it passes on the props of the nearest route to the child component also. 
export default withRouter(Post);