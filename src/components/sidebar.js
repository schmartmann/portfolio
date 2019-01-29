import React, { Component } from 'react';
import './stylesheets/sidebar.scss';

const contents = () => {
  return 'sidebar'.split( '' ).map(
    ( letter, index ) => <li key={ index}>{ letter }</li>
  );
};


const sidebarClass = ( expanded ) => expanded ? 'expanded' : 'collapsed';

const Sidebar = ( { expanded, toggleSidebar } ) => {
  return(
      <ul
        className={ 'sidebar ' + sidebarClass( expanded ) }
        onClick={ toggleSidebar }
        >
      { contents() }
    </ul>
  );
};

export default Sidebar;
