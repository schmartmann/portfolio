import React, { Component } from 'react';
import './stylesheets/stagingArea.scss';

const StagingArea = ( { children, expanded } ) => {
  return(
    <div className={ `component ${ expanded ? 'expanded' : '' }`.trim() }>
      { children }
    </div>
  );
};

export default StagingArea;
