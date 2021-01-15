import React from 'react';
import './App.css';
import {Link, Redirect} from 'react-router-dom';
const emailCase = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneCase = /^[0-9]+$/
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            nameError: false,
            emailError: false,
            passwordError: false, 
            phoneError: false,
            redirectToHome: false
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
        }else if(type=='phone'){
            if(value.length != 10 || phoneCase.test(value) == false){
                this.setState({[type+"Error"]: true, [type]: value});
            }else{
                this.setState({[type+"Error"]: false, [type]: value});
            }
        }else if(type=='password'){
            if(value.length >= 5 && value.length <= 10){
                this.setState({[type+"Error"]: false, [type]: value});
            }else{
                this.setState({[type+"Error"]: true, [type]: value});
            }
        }else{
            this.setState({[type+"Error"]: false, [type]: value})
        }
        // 
     }
     
     submit = () => {
         let storageData = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];
         if(storageData.filter((elm) => elm.email == this.state.email).length == 0){
            storageData.push({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
            })
           localStorage.setItem("userInfo", JSON.stringify(storageData));
   
           this.setState({redirectToHome: true});
         }else{
            alert("Sorry!This email id is already exists!")
         }
         
     }

   render() {
       let {name, email, phone, nameError, emailError, phoneError, passwordError, password, redirectToHome} = this.state;
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
                                    <h2>SIGN UP</h2>
                                    <div className="form-horizontal">        
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6"> 
                                                <div className="form-group">
                                                    <label className="col-form-label">Name</label>
                                                    <input type="text" className="form-control" onChange={(e) => this.textChange(e, 'name')}/>
                                                    {nameError ? <span className="text-danger">Name is invalid</span>:null}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Email</label>
                                                    <input type="text" className="form-control" onChange={(e) => this.textChange(e, 'email')}/>
                                                    {emailError ? <span className="text-danger">Email is invalid</span>:null}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Phone Number</label>
                                                    <input type="text" className="form-control" onChange={(e) => this.textChange(e, 'phone')}/>
                                                    {phoneError ? <span  className="text-danger">Phone number is invalid</span>:null}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Password</label>
                                                    <input type="password" className="form-control" onChange={(e) => this.textChange(e, 'password')}/>
                                                    {passwordError ? <span  className="text-danger">Password shuld between 5 to 10 characters.</span>:null}
                                                </div>
                                            </div>  
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" onChange={(e) => this.textChange(e, 'confirmPassword')}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">  
                                                <div className="form-group">
                                                    <label className="col-form-label">Company / Competitor </label>
                                                    <input type="text" className="form-control" onChange={(e) => this.textChange(e, 'company')}/>
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">     
                                                <div className="form-group">
                                                    <label className="col-form-label">Country</label>
                                                    <input type="text" className="form-control" onChange={(e) => this.textChange(e, 'country')}/>
                                                </div>
                                            </div>   
                                            <div className="col-lg-12 col-md-12">  
                                                <div className="form-group mb-0">
                                                    <ul className="list-inline text-center mb-0">
                                                        <li className="list-inline-item">
                                                            <button className="btn btn-primary" disabled={name == '' || email == '' || password == '' || phone == '' || emailError || phoneError || passwordError} onClick={() => this.submit()}>Signup</button>
                                                        </li>
                                                        <li className="list-inline-item">                                                        
                                                            <Link className="btn btn-primary" to="/login">login</Link>
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
export default Signup;