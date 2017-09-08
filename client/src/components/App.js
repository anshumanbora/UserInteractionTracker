import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';
import Register from './Register';
import UserLogs from './UserLogs';
import RegisterError from './RegisterError';
import LoginError from './LoginError';

const App = () =>{
  return(
    <div id="container">
      <BrowserRouter>
        <div >
          <div id="header">
          < Header/>
          </div>
          <div id="body">
            <Route exact={true} path= "/" component = {Welcome} />
            <Route exact={true} path= "/login" component = {Login} />
            <Route exact={true} path= "/register" component = {Register} />
            <Route exact={true} path= "/userlogs" component = {UserLogs} />
            <Route exact={true} path= "/errorlogin" component = {LoginError} />
            <Route exact={true} path= "/registererror" component = {RegisterError} />
          </div>
          <div ></div>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App;
