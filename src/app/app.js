import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.scss';

import Sidebar from '../components/sidebar';
import StagingArea from '../app/stagingArea';

import Landing from '../landing/landing';

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
          </StagingArea>
        </div>
      </Router>
    );
  }
};

export default App;
