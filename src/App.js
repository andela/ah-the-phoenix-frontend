import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h3>Authors haven</h3>
            <Switch>
              <Route exact path="/" />
              <Route path="/login" />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
