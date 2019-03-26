import React from 'react';
import FolderList from '../folderlist/folderlist';
import NoteList from '../notelist/notelist';

export default class Note extends React.Component {
  render() {

    const folderId = this.props.match.params.folderId;
    const noteId = this.props.match.params.noteId;
    
    const selectedFolder = this.props.folders.find( folder => folder.folderId === folderId );

    console.log('folderId: ' + folderId);
    console.log('selectedFolder: ' + selectedFolder);

    return (
      <main role="main" className="App">
      <section className="main-layout">
      <div className="left-menu">
        <FolderList folders={this.props.folders} selected={folderId}/>
      </div>
      <div className="right-content">
        note stuff here?App
      </div>
      </section>
      </main>
    )

  }
}