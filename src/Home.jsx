import React from 'react';

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from './component/NavigationBar';
import Search  from './SearchComponent';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './component/Sidebar';
import logo from './logo.svg';
import App from './App';
function Home() {
  return (
    <React.Fragment>
      <Router>
        {/* <NavigationBar /> */}

        <Sidebar />

        <Switch>
          <Route exact path="/home" component={Search} />
          <Route path="/about" component={About} />
          <Route path="/NoMatch" component={NoMatch} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Home;