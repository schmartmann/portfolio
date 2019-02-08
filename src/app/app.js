import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Sidebar from '../components/sidebar';
import StagingArea from '../components/stagingArea';

import Landing from '../landing/landing';
import CodeProjects from '../code/codeProjects';
import WritingProjects from '../writing/writingProjects';
import About from '../about/about';

const App = () => {
  const [ expanded, setExpanded ] = useState( true );

   return(
    <Router>
      <div className="app-container">
      <Sidebar expanded={ expanded } setExpanded={ setExpanded } />
        <StagingArea expanded={ !expanded }>
          <Route path="/" exact component={ Landing }/>
          <Route path="/code" exact component={ CodeProjects }/>
          <Route path="/writing" exact component={ WritingProjects }/>
          <Route path="/about" exact component={ About }/>
        </StagingArea>
      </div>
    </Router>
  );
};

export default App;
