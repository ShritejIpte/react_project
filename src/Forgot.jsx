import React from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';

const emailCase = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Forgot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            redirectToLogin: false,
		}
    }

    textChange = (event, type) => {
        let value = event.target.value;
        if(type=='email'){
            if(emailCase.test(value)){
                this.setState({[type+"Error"]: false, [type]: value});
            }else{
                this.setState({[type+"Error"]: true, [type]: value});
            }
        }
    }
     
     submit = () => {
        let data = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"));
        // console.log("data====>", data);
        // console.log("email==>", this.state.email);
        if(data == null){
            alert("No Information found..");
        }else if(data.filter((elm) => elm.email == this.state.email).length > 0){
            this.setState({redirectToLogin: true, email: ''});
        }else{
           alert("Sorry!Your credentials are wrong!");
        }
     }
    
    render() {
        let {redirectToLogin, email} = this.state;
        if(redirectToLogin){
           return <Redirect to="/login"/>
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
                                          <div className="form-group text-center">
                                                   <button className="btn btn-primary" disabled={email == ''} onClick={() => this.submit()}>Send</button><br />
                                                   <button className="btn btn-link">If you have already account then click <Link  to="/login">Here</Link></button>
                                             {/* <ul className="list-inline text-center login-btn-panel">
                                                <li className="list-inline-item">
                                                </li>
                                                <li className="list-inline-item">
                                                </li>
                                             </ul> */}
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
 export default Forgot;