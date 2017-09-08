import React from 'react';
import {Link} from 'react-router-dom';

const RegisterError = () => {
    return(
        <div>

            <div>User already Exists. Try login</div>
            <Link to={'/login'} activeClassName="active">Login</Link>
        </div>
    );
}


export default RegisterError;