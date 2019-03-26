import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import DummyStore from './store/dummy-store';
import Header from './component/header/header'

class App extends Component {
  state = {
    folders: DummyStore.folders,
    notes: DummyStore.notes,
  }
  render() {
    return (
      <>
        <Header />
        <main role="main" className="App">
          <section className="main-layout">
          <div className="left-menu">
            
          </div>
          <div className="right-content">
            
          </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
