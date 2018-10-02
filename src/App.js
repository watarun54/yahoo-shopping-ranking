import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Ranking from './components/Ranking';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/all" component={Ranking} />
          <Route
            path="/category/1"
            render={() => <Redirect to="/all" />}
          />
          <Route
            path="/category/:id"
            render={
              ({ match }) => <Ranking categoryId={match.params.id} />
            }
          />
        </Switch>
      </div>
    )
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

export default App;
