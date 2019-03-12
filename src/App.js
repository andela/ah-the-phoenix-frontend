import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Signup from "./views/Signup/Signup"
import Login from './views/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { Divider } from 'semantic-ui-react'
import ReduxToastr from 'react-redux-toastr'
import VerifyMail from './views/VerifyMail/VerifyMail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Divider />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/verify/:token" component={VerifyMail} />
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
