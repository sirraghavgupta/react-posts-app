import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

/**
 * axios configuration is global, so this interceptor object will be applicable
 * to all the components automatically. 
 * and will work for all the requests. 
 */ 

 // requests from allover the app, come here first. 
let interceptorDemo = Axios.interceptors.request.use( request => {

    console.log("---- interceptor ----");
    console.log(request);
    /**
     * here we can modify the request as well. 
     * we need to return the request as well, else we are blocking it. 
     */
    return request;

}, error => {
    /**
     * in case there is any error with the sending of the request, 
     * this method will xeecute, it handles only the errors with the 
     * sending of the request. 
     */
    
    console.log("---- interceptor ----");
    console.log(error);
    // this is to send the error back to the component for local handling if we want.
    return Promise.reject(error);

});


Axios.interceptors.response.use( response => {
    console.log("---- interceptor ----");
    console.log(response);

    return response;

}, error => {
    console.log("---- interceptor ----");
    console.log(error);
    return Promise.reject(error);

});

// to remove an interceptor if u want. 
Axios.interceptors.request.eject(interceptorDemo);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
