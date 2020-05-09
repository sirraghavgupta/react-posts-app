import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost : null
    }

    componentDidMount = () => {
        console.log("mounting the full post");
    }
    
    componentDidUpdate = () => {
        console.log("updating the full post");
        console.log("component did update - post id ", this.props.id);
        
        if( this.props.id && ( this.state.loadedPost==null || this.props.id!==this.state.loadedPost.id) ){
            Axios.get("/posts/" + this.props.id)
                .then( response => {
                    console.log(response);
                    this.setState({ loadedPost : response.data });
                } )
        }
    }

    deletePostHandler = () => {
        console.log("inside delete handler");
        
        Axios.delete("/posts/" + this.props.id)
             .then( response => {
                 console.log(response); 
             });
    }

    render () {
        console.log("=== render of [FULLPOST]");

        let post = <p>Please select a Post!</p>;

        if(this.props.id){
            if( !this.state.loadedPost ){
                return <p>Loading...</p>;
            }
            post = (
                <div className="FullPost">
    
                    <h1>{ this.state.loadedPost.title }</h1>
    
                    <p>{ this.state.loadedPost.body }</p>
    
                    <div className="Edit">
                        <button className="Delete"
                                onClick = { this.deletePostHandler } >Delete</button>
                    </div>
    
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;