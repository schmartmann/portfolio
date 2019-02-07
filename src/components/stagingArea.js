import React, { Component } from 'react';
import './stagingArea.scss';

const stagingAreaClass = ( expanded ) => expanded ? ' expanded' : '';

const StagingArea = ( { children, expanded } ) => {
  console.log( expanded )
  return(
    <div className={ "component" + stagingAreaClass( expanded ) }>
      { children }
    </div>
  )
};

export default StagingArea;
