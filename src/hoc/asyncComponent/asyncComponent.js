import React, { Component } from 'react';

/**
 * importComponent() is a function. 
 * in the state we take a component which will be dynamically initilised when 
 * the actual component is recived. 
 * and the code is executed in componentDidMount().
 */
const asyncComponent = (importComponent) => {
    return class extends Component{
        
        state = {
            component : null
        }

        componentDidMount = () => {
            /**
             * this method will be executed and returns a promise which inturn 
             * gives us the component. and then we set it in tha state. 
             * and its the syntax 'cmp.default' with the create-react-app and 
             * if highly dependent on that. 
             */
            importComponent()
                .then( cmp => {
                    this.setState({ component : cmp.default });
                })
        }

        render(){
            /**
             * now, we see if we have the component, then we render it and pass the 
             * props also. else we send null. 
             */
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;


/**
 * code splittig OR lazy loading -----------------------------------------
 * when we make the project, all the components gets clubbed into one big 
 * file - bundle.js, no matter whether the user will visit the component or not, 
 * but we downlaod it in the browser. and that may be crucial in a big application 
 * to improve performance. so, we do like we load the component only when its 
 * required. this process of downloading the component only when its required is 
 * called lazy loading or compomnent splitting. 
 * 
 * we can call then asynchronous components also.
 * 
 * its an advanced feature and the webpack config plays an important role in this. 
 * if we use create-reactt-app, its best and we dont need to worry about it much 
 * then. 
 * 
 * we need to make an HOC for that and its a method which takes method as a parameter 
 * and returns a component. rest see in code.  
 */