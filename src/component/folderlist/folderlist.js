import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class FolderList extends Component {

  render() {

    return (
      <>
        <ul className="folder-list">
          {this.props.folders.map(folder =>
            <li key={folder.id} className={folder.id === this.props.selected ? 'folder-selected' : ''}>
              <Link to={`/folder/${folder.id}`}>
                {this.props.goBack ? 'Go Back' : folder.name}
              </Link>
            </li> 
 
              

          )}
          {this.props.goBack ? <li>folder.name</li> : ''}
        </ul>
      </>
    );
  }
}
