import React, { Component } from 'react';

import './NewPost.css';
import Axios from 'axios';
import { Redirect } from 'react-router';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Max',
        redirect : false
    }

    componentDidMount = () => {
        console.log("mounting [ NEW POST ]");
        // console.log(this.props);
    }
    
    componentDidUpdate = () => {
        console.log("updating [ NEW POST ]");
    }

    componentWillUnmount = ()=>{
        console.log("unmounting [ NEW POST ]");
    }

    postPostHandler = () => {
        console.log("posting data to server from new posts");
        const data = {...this.state};
        Axios.post("/posts", data)
             .then( response => {
                 console.log(response);
                 this.setState(
                     {redirect : true}
                 );
             });
    }

    render () {
        console.log("rendering [ NEWPOST ]");
        let redirect = null;
        if(this.state.redirect){
            redirect = <Redirect to="/posts"/>;
        }

        return (
            <div className="NewPost">

                {redirect}

                <h1>Add a Post</h1>

                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                
                <label>Content</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
               
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>

                </select>
                
                <button onClick = { this.postPostHandler }>Add Post</button>

            </div>
        );
    }
}

export default NewPost;