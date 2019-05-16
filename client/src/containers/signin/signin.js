import React from 'react';
import './signin.css'

const Signin = props => {
    return ( 
        <div className="signInContainer">
            <h1 className="center">Sign in</h1>
            
            <form className="signInForm" method="POST" action="/signin">
                <input name="username" type="text" placeholder="username"/>
                <input name="password" type="password" placeholder="password"/>

                <button className="center" type="submit">Sign in</button>
            </form>

            <h3 className="center" onClick={() => props.history.push('/signup')}> Sign up</h3>
        </div>
     );
}
 
export default Signin;
