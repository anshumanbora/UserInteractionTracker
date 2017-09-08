import React,{Component} from 'react';


class Login extends Component {

 render() {
  return(
    <div className="row ">

          <form method="post" action="/api/login">
            <div className="form-group">
                <label className="form-control-label">Username</label>
                <input className="form-control form-control-lg" type="text" name="username" placeholder="Username"/><br/>
            </div>
            <div className="form-group">
                <label className="form-control-label">Password</label>
                <input className="form-control form-control-lg" type="password" name="password" placeholder="Password"/><br/>
            </div>
            <div className="btn">
                <input type="submit" value="Login"/>
            </div>
          </form>


   </div>
  )
 }
};


export default Login;
