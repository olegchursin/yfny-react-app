import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Program from './views/Program'
import Contact from './views/Contact';
import Homepage from './views/Homepage';
import Registration from './views/Registration'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

const styles = {
  appContent: {
    flex: 1
  },
  appWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.appWrapper}>
          <Navigation/>
          <div style={styles.appContent}>
            <Route exact path="/" component={Homepage}/>
            <Route path="/program" component={Program}/>
            <Route path="/contacts" component={Contact}/>
            <Route path="/registration" component={Registration}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;