import React, { Component } from 'react';
import './App.css';

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
