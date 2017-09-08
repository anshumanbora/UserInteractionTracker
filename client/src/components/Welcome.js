import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component{

    render() {
        return (
            <div>

                <div className="row welcome vspace">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 text-right">

                        <Link to={'/login'} activeClassName="active"><h2>Login</h2></Link>
                    </div>

                    <div className="col-lg-4">
                        <div className="col-lg-1 text-left"></div>
                        <Link to={'/register'} activeClassName="active"><h2>Register</h2></Link>

                    </div>
                    <div className="col-lg-2"></div>
                </div>


            </div>
        );
    }
}


export default Welcome;
