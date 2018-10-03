import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Ranking from './components/Ranking';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}> {/* styleを追加 */}
        <Reboot />

        {/* ページタイトルを追加 */}
        <AppBar style={{ left: 240 }}> {/* styleを追加 */}
          <Toolbar>
            <Typography type="title" color="inherit">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />

        {/* div要素を追加してstyleを指定 */}
        <div style={{ marginTop: 64, padding: 32 }}>
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
