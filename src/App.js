import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import DummyStore from './store/dummy-store';
import Header from './component/header/header';
import HomePage from './component/homepage/homepage';

class App extends Component {
  state = {
    folders: DummyStore.folders,
    notes: DummyStore.notes,
  }
  render() {
    return (
      <>
        <Header />
        <Route 
          exact 
          path="/" 
          render={
            () => <HomePage folders={this.state.folders} notes={this.state.notes} />
          }
        />
       
      </>
    );
  }
}

export default App;
