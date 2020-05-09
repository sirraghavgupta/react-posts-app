import React, { Component } from 'react';

import './NewPost.css';
import Axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Max'
    }

    componentDidMount = () => {
        console.log("mounting the new post");
    }
    
    componentDidUpdate = () => {
        console.log("updating the new post");
    }

    postPostHandler = () => {
        console.log("posting data");
        const data = {...this.state};
        Axios.post("/posts", data)
             .then( response => {
                 console.log(response);
             });
    }

    render () {
        console.log("=== render of [NEWPOST]");

        return (
            <div className="NewPost">

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