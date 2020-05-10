import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost : null
    }

    componentDidMount = () => {
        console.log("mounting the full post");
        console.log("componentDidMount - post id ", this.props.match.params.id);
        console.log(this.props);
        this.loadData();
    }
    
    componentDidUpdate = () => {
        console.log("updating the full post");
        console.log(this.props);
        this.loadData();
    }

    loadData(){
        if( this.props.match.params.id && ( this.state.loadedPost==null || this.props.match.params.id != this.state.loadedPost.id) ){
            Axios.get("/posts/" + this.props.match.params.id)
                .then( response => {
                    console.log(response);
                    this.setState({ loadedPost : response.data });
                } ).catch( error => {
                    console.log(error);
                });
        }
    }

    deletePostHandler = () => {
        console.log("inside delete handler");
        
        Axios.delete("/posts/" + this.props.match.params.id)
             .then( response => {
                 console.log(response); 
             });
    }

    render () {
        console.log("=== render of [FULLPOST]");

        let post = <p>Please select a Post!</p>;

        if(this.props.match.params.id){
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