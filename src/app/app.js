import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';

import Sidebar from '../components/sidebar';
import StagingArea from '../components/stagingArea';

import Landing from '../landing/landing';
import CodeProjects from '../code/codeProjects';
import WritingProjects from '../writing/writingProjects';

class App extends Component {
  state = { sidebarExpanded: true }

  toggleSidebar() {
    const { sidebarExpanded } = this.state;

    this.setState( { sidebarExpanded: !sidebarExpanded } );
  }

  render() {
    const { sidebarExpanded } = this.state;

    return(
      <Router>
        <div className="app-container">
          <Sidebar expanded={ sidebarExpanded } toggleSidebar={ this.toggleSidebar.bind( this ) }/>
          <StagingArea expanded={ !sidebarExpanded }>
            <Route path="/" exact component={ Landing }/>
            <Route path="/code" exact component={ CodeProjects }/>
            <Route path="/writing" exact component={ WritingProjects }/>
          </StagingArea>
        </div>
      </Router>
    );
  }
};

export default App;
