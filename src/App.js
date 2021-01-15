import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import UserLogin from './User/UserLogin';
import UserRegisteration from './User/UserRegisteration';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';
import Home from './Home';
import AdminLogin from './admin/AdminLogin';
import SearchComponent from './SearchComponent';
// import Sidebar from './component/Sidebar';
import Search  from './SearchComponent';
import { About } from './About';
import { NoMatch } from './NoMatch';
import ClientList  from './ClientList';
import { Invoices }  from './Invoices';
import { Reports }  from './Reports';
import Sidebar from './component/Sidebar';
function App() {
  return (
    <div className="wrapper">
      <Router> 
        <React.Fragment>
        <Switch> 
                  <Route exact path='/' component={Login}></Route>
                  <Route exact path='/admin' component={AdminLogin}></Route>
                  <Route exact path='/UserLogin' component={UserLogin}></Route>
                  <Route exact path='/signup' component={UserRegisteration}></Route>
                  <Route exact path='/login' component={Login}></Route> 
                  </Switch>
           {/* <Sidebar /> */}
              <Switch> 
                  {/* <Route exact path='/' component={Login}></Route>
                  <Route exact path='/admin' component={AdminLogin}></Route>
                  <Route exact path='/UserLogin' component={UserLogin}></Route>
                  <Route exact path='/signup' component={UserRegisteration}></Route>
                  <Route exact path='/login' component={Login}></Route>  */}
                  {/* <Route exact path='/signup' component={Signup}></Route>  */}
                  <Route exact path='/forgot' component={Forgot}></Route> 
                  <Route  path='/ClientList' component={ClientList}></Route>
                  <Route  path='/Invoices' component={Invoices}></Route>
                  {/* <Route  path='/Search' component={SearchComponent}></Route> */}
                   {/* <Route exact path="/home" component={Search} /> */}
                   <Route path="/about" component={About} />
                    <Route path="/NoMatch" component={NoMatch} />
                    <Route path="/Reports" component={Reports} />
                    {/* <Route path="/ClientList" component={ClientList} /> */}
                  </Switch> 
              {/* <main>
                <Switch>
                {/* <Route exact path="/home" component={props => <SearchComponent />} /> 
                <Route exact path="/Search" component={props => <SearchComponent />} />
                <Route exact path="/About" component={props => <Home />} />
                <Route exact path="/login-test" component={props => <Login />} />  
                </Switch>
            </main>  */}
              </React.Fragment>
          </Router>
    </div>
  );
}

export default App;


