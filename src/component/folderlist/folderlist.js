import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class FolderList extends Component {

  render() {
    return (
      <>
        <ul className="folder-list">
          {this.props.folders.map(folder =>
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>
                {folder.name}
              </Link>
            </li>  
          )}
        </ul>
      </>
    );
  }
}
