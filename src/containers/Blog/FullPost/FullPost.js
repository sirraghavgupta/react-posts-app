import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost : null
    }

    componentDidMount = () => {
        console.log("mounting [ FULL POST ]");
        // console.log("componentDidMount - post id ", this.props.match.params.id);
        // console.log(this.props);
        this.loadData();
    }
    
    /**
     * when we have a full post already rendered on the posts route, 
     * and we click on another post, new props are sent by the route and it 
     * starts the upgrade cycle. so, we need to get the data again in 
     * the componentDidMount() method also. 
     */
    componentDidUpdate = () => {
        console.log("updating [ FULL POST ]");
        // console.log(this.props);
        this.loadData();
    }

    componentWillUnmount = ()=>{
        console.log("unmounting [ FULL POST ]");
    }

    loadData(){
        /**
         * here this.props.match.params.id is string, so either we need to 
         * use != instead of !== or we can use + before that to convert it to
         * number. - awesome. 
         */
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
        console.log("rendering [ FULL POST ]");

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