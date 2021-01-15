import React from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           email: '',
           password: '',
         redirectToHome: false,
		}
   }

   textChange = (event, type) => {
      let value = event.target.value;
      this.setState({[type]: value});
   }
   
   submit = () => {
      let data = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"));
      console.log("data====>", data);
      console.log("email==>", this.state.email);
      console.log("password==>", this.state.password);
     if(data == null){
      alert("No Information found..");
     }else if(data.filter((elm) => elm.email == this.state.email && elm.password == this.state.password).length > 0){
         this.setState({redirectToHome: true, email: '', password: ''});
      }else{
         alert("Sorry!Your credentials are wrong!");
      }
   }
   render() {
      let {redirectToHome, email, password} = this.state;
      if(redirectToHome){
         return <Redirect to="/home"/>
      }
     
      return (
            <div className="login-bg">
               <div className="container h-100">
                  <div className="row align-items-center h-100">
                     <div className="col-lg-8 offset-lg-2">
                     <img src="/images/logo.png" className="logo d-block m-auto pt-3 pb-2" />
                        <div className="login-holder">
                           <div className="login-holder-inner">
                              <div className="login-input">
                                 <h2>Login</h2>
                                 <div className="row">
                                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2"> 
                                       <div className="form-horizontal login">        
                                          <div className="form-group">
                                             <label className="col-form-label">Email</label>
                                             <input type="text" className="form-control" placeholder="Type here" onChange={(e) => this.textChange(e, 'email')}/>
                                          </div>
                                          <div className="form-group">
                                             <label className="col-form-label">Password</label>
                                             <input type="password" className="form-control" placeholder="Type here" onChange={(e) => this.textChange(e, 'password')}/>
                                          </div>
                                          <div className="form-group clearfix">
                                          <Link className="forgot-password float-right btn-forgot-password" to="/forgot">Forgot Password</Link>
                                          </div>  
                                          <div className="form-group">
                                             <ul className="list-inline text-center login-btn-panel">
                                                <li className="list-inline-item">
                                                   <button className="btn btn-primary" disabled={email == '' || password == ''} onClick={() => this.submit()}>Login</button>
                                                </li>
                                                <li className="list-inline-item">
                                                   <Link className="btn btn-primary" to="/signup">Singup</Link>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>   
                                 </div>   
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
       )
   }
}
export default Login;