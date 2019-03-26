import React, { Component } from 'react';
import './App.css';
import DummyStore from './store/dummy-store';

import Header from './component/header/header'
import Layout from './component/layout/layout'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main role="main" className="App">
          <Layout />
        </main>
      </>
    );
  }
}

export default App;
