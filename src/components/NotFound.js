import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFound extends Component {

    render() {
        return (
            <div>
                <div>404</div>
                <Link to='/'>Click here to go back to home</Link>
            </div>
        );
    }
}

export default NotFound;