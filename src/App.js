import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (

    /**
     * react-router is an essential package which is not by facebook.
     * its the standard for the react routing support. 
     * it contains all the logic reqired for routing. 
     * react-router-dom provides the rendering support for that.
     * 
     * we need to add this wrapper around the component inside which we need to 
     * use routing.
     * now here, everything inside this componnent will be routing enabled. 
     */
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
