import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import DummyStore from './store/dummy-store';
import Header from './component/header/header';
import HomePage from './component/homepage/homepage';
import Folder from './component/Folder/Folder';
import Note from './component/Note/Note';

class App extends Component {
  state = {
    folders: DummyStore.folders,
    notes: DummyStore.notes,
  }
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" 
          render={
            () => <HomePage folders={this.state.folders} notes={this.state.notes} />
          }
        />
        <Route exact path="/folder/:folderId"
          render={ (props) => <Folder folders={this.state.folders} notes={this.state.notes} match={props.match} />
          } 
        />
        <Route exact path="/notes/:noteId"
          render={ (props) => <Note folders={this.state.folders} notes={this.state.notes} match={props.match} /> }
        />
      </>
    );
  }
}

export default App;
