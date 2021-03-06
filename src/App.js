import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Signup from "./views/Signup/Signup"
import Login from './views/Login/Login'
import NavBar from './components/NavBar/NavBar'
import ReduxToastr from 'react-redux-toastr'
import VerifyMail from './views/VerifyMail/VerifyMail';
import PasswordReset from './views/PasswordReset/PasswordReset';
import PasswordUpdate from './views/PasswordReset/PasswordUpdate';
import Profile from './views/Profile/getProfile';
import EditProfile from './views/Profile/editProfile';
import ListArticles from "./components/Articles/ListArticles";
import "./index.scss"
import Article from './components/Articles/Article';
import AddArticle from './views/AddArticle/AddArticle';
import EditArticle from './views/EditArticle/EditArticle';
import AllNotifications from './components/Notifications/AllNotifications'
import SingleNotification from './components/Notifications/SingleNotification'
import Footer from './components/Footer/Footer'
import SubscribeLink from './components/Home/Subscribe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="app">
            <br />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/verify/:token" component={VerifyMail} />
              <Route exact path="/reset-password" component={PasswordReset} />
              <Route exact path="/update-password/:token" component={PasswordUpdate} />
              <Route exact path="/profile/:user_id" component={Profile} />
              <Route path="/:user_id/edit_profile" component={EditProfile} />
              <Route exact path="/articles" component={ListArticles} />
              <Route exact path="/articles/:slug" component={Article} />
              <Route exact path="/create_article" component={AddArticle} />
              <Route
                exact
                path="/articles/:slug/edit_article/"
                component={EditArticle}
              />
              <Route
                exact
                path="/api/v1/users/unsubscribe/:uuid"
                component={SubscribeLink}
              />
              <Route exact path="/notifications" component={AllNotifications} />
              <Route exact path="/notifications/:id" component={SingleNotification} />
            </Switch>
          </div>
          <br />
          <Footer />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            closeOnToastrClick
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
