import React, { Component } from 'react';

class Signup extends Component {
    onLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <button onClick={this.onLogin}>login</button>
            </div>
        );
    }
}

export default Signup;