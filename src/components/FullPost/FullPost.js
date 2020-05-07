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

        /**
         * here we need to understand that we set the state and it will create 
         * an infinite loop because it will again trigger the render cycle. 
         * so, we need to test that whether we really want to update or not. 
         * 
         * second, the setState method will not set the state immediately. 
         * so, when we render the data, it will give error as no state will 
         * be found for the first time. so, we need to check that condition 
         * and handle that. 
         */
        if( this.props.id && ( this.state.loadedPost==null || this.props.id!==this.state.loadedPost.id) ){
            Axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
                .then( response => {
                    console.log(response);
                    this.setState({ loadedPost : response.data });
                } )
        }
    }

    render () {

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
                        <button className="Delete">Delete</button>
                    </div>
    
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;