import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './Login';
import About from './About';
import Addmorevideo from './Addmorevideo';
import logo from './img/logo.png';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			
		}
	}
   render() {
      return (
        <div>
            <Router> 
                {/* <div className=" navbarset">
                    <div className="logImage">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <ul className="navset pull-right"> 
                        <li> 
                            <Link to="/">Home</Link> 
                        </li> 
                        <li> 
                            <Link to="/About">About Us</Link> 
                        </li>
                        <li> 
                            <Link to="/Addmorevideo">Add More Video</Link> 
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                        </li> 
                    </ul> 
                </div> */}
                <Switch> 
                    <Route exact path='/' component={Home}></Route> 
                    <Route exact path='/About' component={About}></Route> 
                    <Route exact path='/Addmorevideo' component={Addmorevideo}></Route>
                </Switch> 
            </Router>      
        </div>
      )
   }
   
}
export default Header;
