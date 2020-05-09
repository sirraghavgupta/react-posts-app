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

/**
 * ideally, we should not use the complete path now while sending the requests. 
 * but it still manages that automatically if we use the complete url. 
 * i am doubt full, i need to check this. 
 */
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// common headers are there which are in every request
Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

// by default, its application-json
Axios.defaults.headers.post['Content-Type'] = 'application/json';


 // requests from allover the app, come here first. 
Axios.interceptors.request.use( request => {

    console.log("---- requst interceptor success----");
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
    
    console.log("---- request interceptor failure----");
    console.log(error);
    // this is to send the error back to the component for local handling if we want.
    return Promise.reject(error);

});


Axios.interceptors.response.use( response => {
    console.log("---- response interceptor success----");
    console.log(response);

    return response;

}, error => {
    console.log("----response interceptor failure----");
    console.log(error);
    return Promise.reject(error);

});

// to remove an interceptor if u want. 
// Axios.interceptors.request.eject(interceptorDemo);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
