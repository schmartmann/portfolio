import React, { Component } from 'react';
import './stylesheets/sidebar.scss';

const contents = () => {
  return [ 'code', 'writing' ].map(
    ( route, index ) => <li key={ index}>{ route }</li>
  );
};


const sidebarClass = ( expanded ) => expanded ? 'expanded' : 'collapsed';

const Sidebar = ( { expanded, setExpanded } ) => {
  return(
      <ul
        className={ 'sidebar ' + sidebarClass( expanded ) }
        onClick={ () => setExpanded( !expanded ) }
        >
      { contents() }
    </ul>
  );
};

export default Sidebar;
