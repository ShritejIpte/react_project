import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Login from '../Login';
import SearchComponent from '../SearchComponent';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from '../Home';

class Sidebar extends Component{

constructor(props){
    super(props);
    // this.state=initialState;
    //   this.FirstName = this.FirstName.bind(this);
}

render(){
     return (
<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    console.log(selected);
                    const to = '/' + selected;
                    // <Link to=to>Home</Link>
                    console.log(location);
                    console.log(location.pathname);
                    if (location.pathname !== to) {
                    // console.log(history.push(to));
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="Search">
                    <NavItem eventKey="Search">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Search
                        </NavText>
                    </NavItem>
                    {/* <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            home
                        </NavText>
                    </NavItem> */}
                    <NavItem eventKey="login-test">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            login-test
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Home">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        <main>
                {/* <Route path="/" exact component={props => <Home />} /> */}
                <Route path="/Home" component={props => <Home />} />
                 <Route path="/login-test" component={props => <Login />} /> 
            </main>
        </React.Fragment>
    )} 
    />
</Router>


     )
}
}

export default Sidebar;

