import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/sidebar.scss';

const paths = () => {
  return [ 'code', 'writing', 'about' ].map(
    ( route, index ) =>
      <li  key={ index } className="link">
        <Link to={ route }>{ route }</Link>
      </li>
  );
};


const sidebarClass = ( expanded ) => expanded ? 'expanded' : 'collapsed';

const Sidebar = ( { expanded, setExpanded } ) => {
  return(
      <ul
        className={ 'sidebar ' + sidebarClass( expanded ) }
        onClick={
          ( event ) => {
            if ( event.target.classList[ 0 ] ==='sidebar' ) {
              setExpanded( !expanded )
            }
          }
        }>
      { paths() }
    </ul>
  );
};

export default Sidebar;
