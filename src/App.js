import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Signup from "./views/Signup/Signup"
import NavBar from './components/NavBar/NavBar'
import { Divider } from 'semantic-ui-react'
import ReduxToastr from 'react-redux-toastr'
import VerifyMail from './views/VerifyMail/VerifyMail';
import PasswordReset from './views/PasswordReset/PasswordReset';
import PasswordUpdate from './views/PasswordReset/PasswordUpdate';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Divider />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/verify/:token" component={VerifyMail} />
              <Route exact path="/reset-password" component={PasswordReset} />
              <Route exact path="/update-password/:token" component={PasswordUpdate} />
            </Switch>
          </div>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            closeOnToastrClick />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
