import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import Ranking from './components/Ranking';
import Ranking from './containers/Ranking';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">全てのカテゴリ</Link></li>
          <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
          <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
        </ul>

        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={
            ({ match }) => <Ranking categoryId={match.params.id} />
          }
        />
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
