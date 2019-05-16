import React, { Component } from 'react';

class Login extends Component {
    onSignup = () => {
        this.props.history.push({ pathname: '/signup' })
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <button onClick={this.onSignup}>Signup</button>
            </div>
        );
    }
}

export default Login;