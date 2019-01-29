import React, { Component } from 'react';

const componentClass = ( expanded ) => expanded ? ' expanded' : '';


const StagingArea = ( { children, expanded } ) => {
  console.log( expanded )
  return(
    <div className={ "component" + componentClass( expanded ) }>
      { children }
    </div>
  )
};

export default StagingArea;
