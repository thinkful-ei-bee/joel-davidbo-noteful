import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import DummyStore from './store/dummy-store';
import Header from './component/header/header'
import FolderList from './component/folderlist/folderlist';


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
            <FolderList folders={this.state.folders} />
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
