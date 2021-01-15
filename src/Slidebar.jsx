import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Login from './Login';
import SearchComponent from './SearchComponent';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Slidebar extends Component{

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
                    const to = '/' + selected;
                    if (location.pathname !== to) {
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
                    <NavItem eventKey="about">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="login">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            login
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
              
                <Route path="/home" component={props => <Login />} />
                <Route path="/Search" component={props => <SearchComponent />} />
                {/* <Route path="/About" component={props => <About />} /> */}
                <Route path="/login" component={props => <Login />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>


     )
}
}
export default Slidebar;



/*
export default function Dashboard() {
  return (
   <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="login">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            login
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
              
                <Route path="/home" component={props => <Home />} />
                <Route path="/About" component={props => <About />} />
                <Route path="/login" component={props => <Login />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
  );
}

function Home() {
  return (

  <div>
  <h2>Welcome Home</h2>
                //inside of return
                <div className="dropdown text-center">
                     <select value="Radish">
  <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option>
</select>
                </div>
  </div>
  )

}

function About() {
  return <h2>Welcome About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
*/