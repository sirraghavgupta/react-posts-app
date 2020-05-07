import Axios from 'axios';

// we create a new axios instance here. 
// we can set all the properties for that noww here. 
const axiosInstance = Axios.create(
    {
        baseURL : 'https://jsonplaceholder.typicode.com'
    }
);

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_OTHER';

axiosInstance.interceptors.request.use( request => {

    console.log("---- interceptor ----");
    console.log(request);

    return request;

}, error => {
    
    console.log("---- interceptor ----");
    console.log(error);
    return Promise.reject(error);

});

export default axiosInstance;