import React,{Component}from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch , Redirect, } from 'react-router-dom'; 

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
import  Invoices_list   from './Invoices_list';
import  Invoices   from './Invoices';
import { Reports }  from './Reports';
import Sidebar from './component/Sidebar';
// import { hashHistory } from 'react-router;'
// import userContext from './userContext.js'
// import {UserProvider} from './userContext.js'
import {UserProvider} from './userContext.js'

  const authentication ={
  isLoggedIn:false,
  onAuthentication(){
    this.isLoggedIn=true;
  },
  getLogInStatus(){
    return this.isLoggedIn
  }
}

function SecuredRoute(props){
    console.log(authentication.getLogInStatus())
  return (
    
    <Route path ={props.path} render={data=>authentication.getLogInStatus()?(
      <props.component {...data}></props.component>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
     
}


// function App() {
class App extends Component{
constructor(props){
    super(props);
this.state={  
  name:"Shrirtej IPTE",
  login_data: { name:"", loggedIn: false ,"token":""},
  readyToRedirect: true,
}
authentication.onAuthentication();
}
// static getDerivedStateFromProps(){
//   return authentication.onAuthentication();
// }
componentDidMount(){
// authentication.onAuthentication();

    const user = this.context;
    const get_access_token = sessionStorage.getItem('access_token');

    if (sessionStorage.getItem("access_token") != null && sessionStorage.getItem("access_token") != "undefined") {
        var bearer = 'Bearer ' + get_access_token;
        // alert(bearer)
 fetch('http://127.0.0.1:8000/api/auth/user', {
            method: 'get',
            headers: {
              'Authorization': bearer,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
    
    }).then((Response) => Response.json()).then((Result) => {
      console.log(Result);
      //  this.props.history.push('/ticket-list')
//  this.props.history.push("/") //doing redirect here.
        if(Result.status==1){
      console.log(Result.status);
        sessionStorage.setItem('access_token', get_access_token);
        sessionStorage.setItem('user_name', Result.user_data.first_name);
        // sessionStorage.setItem('user_name', Result.user_data.first_name);
        // sessionStorage.setItem('user_name', Result.user_data.first_name);
        // sessionStorage.setItem('user_data', Result.user_data);
      //  return (<Redirect to="/" />);
        }else{
        // return (<Redirect to="/" />);
        }
    });
    }else{

    }
}

   render(){
    // const login_data = { name: this.state.name, loggedIn: false }

     const value = {
      user: this.state.name,
     login_data:this.state.login_data
    }
    // console.log(this.state.name);
    // console.log(this.state);
   
  
  return (
      // <UserProvider value={value}>
      // <UserProvider value="Shritej">
      <UserProvider value={value}>
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
                  {/* <SecuredRoute  path='/ClientList' component={ClientList}></SecuredRoute> */}
                  <Route  path='/ClientList' component={ClientList}></Route>
                  <Route  path='/Invoices_list' component={Invoices_list}></Route>
                  {/* <Route  path='/Search' component={SearchComponent}></Route> */}
                   {/* <Route exact path="/home" component={Search} /> */}
                   <Route path="/about" component={About} />
                   <Route path="/invoice" component={Invoices} />
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
     </UserProvider>
  )
  }
}

export default App;


