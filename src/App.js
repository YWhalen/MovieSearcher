import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ソースより抜粋。詳細はソースにて。
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

// コンポーネント読み込み
// import WrapMainContent from './components/WrapMainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />} />
        {/* <Route exact path="/info" component={WrapMainContent(Info)}/>
        <Route exact path="/settings" component={WrapMainContent(Settings)}/> */}
        {/* <Route component={WrapMainContent(NotFound)}/> */}
      </Switch>
      </div>
    );
  }
}

export default App;
