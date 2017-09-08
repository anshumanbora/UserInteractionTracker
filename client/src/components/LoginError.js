import React from 'react';
import {Link} from 'react-router-dom';

const LoginError = () => {
    return(
        <div>
            <div>You need to register first, Buddy.</div>
            <Link to={'/register'} activeClassName="active">Register</Link>
        </div>
    );
}

export default LoginError;



