import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

const initialState={       
        Email:"",      
        Password:"",
        access_token:"",
        ErrorEmail:"",
        ErrorPassword:"",
      redirectToHome: false,
        // errors: {
        //             FirstName:'',
        //             LastName:'',
        //             Email:'',
        //             PhoneNo:'',
        //             Password:'',
        //             CPassword:'',
        //             Company:'',
        //             Country:'',
        //         }
}
class AdminLogin extends Component{

constructor(props){
    super(props);
    this.state=initialState;
    //   this.FirstName = this.FirstName.bind(this);
}

 handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // let errors = this.state.errors;

    this.setState({ [name]: value});
  }

  

validate=()=>{
 console.log(this.state.Email.length);
  if(!this.state.Email.includes('@')){
    // this.state.EmailError = "Invalid Error";
     this.setState({ ErrorEmail:"Invalid Email Address"});   
     console.log("email");
       return false;
  }
  if(this.state.Password.length < 5){
    // this.state.EmailError = "Invalid Error";
     this.setState({ ErrorPassword:"Password must be of minimum 6 characters long"});   
     console.log("pass");
       return false;
  }
  
 return true;
}

  handleSubmit = (event) => {
    event.preventDefault();

  const isValid= this.validate();
    if(isValid){
      console.log(this.state);
      // this.setState(initialState);
      this.setState({ ErrorEmail:""});
      this.setState({ ErrorPassword:""});
    //   this.login();
    }else{
      console.log(this.state);
    console.log("ERROR");
    }
  }

render(){
    return(
        <div className="login-bg">
               <div className="container h-100">
                  <div className="row align-items-center h-100">
                     <div className="col-lg-8 offset-lg-2"> 
                     <img src="/images/logo-white.png" className="logo d-block m-auto pt-3 pb-2" />
                        <div className="login-holder">
                           <div className="login-holder-inner">
                              <div className="login-input">
                                 <h2>Admin Login</h2>
                                 <form onSubmit={this.handleSubmit} >
                                 <div className="row">
                                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2"> 
                                       <div className="form-horizontal login">        
                                          <div className="form-group">
                                             <label className="col-form-label">Email</label>
                                             {/* <input type="text" className="form-control" placeholder="Type here" onChange={(e) => this.textChange(e, 'email')}/> */}
                                             <input type="text" className="form-control" placeholder="Type here" name="Email" onChange={this.handleChange}/>
                                          {this.state.ErrorEmail}
                                          </div>
                                          <div className="form-group">
                                             <label className="col-form-label">Password</label>
                                             {/* <input type="password" className="form-control" placeholder="Type here" onChange={(e) => this.textChange(e, 'password')}/> */}
                                             <input type="password" className="form-control" placeholder="Type here" name="Password" onChange={this.handleChange}/>
                                           {this.state.ErrorPassword}
                                          </div>
                                          <div className="form-group clearfix">
                                          <Link className="forgot-password float-right btn-forgot-password" to="/forgot">Forgot Password</Link>
                                          </div>  
                                          <div className="form-group">
                                             <ul className="list-inline text-center login-btn-panel">
                                                <li className="list-inline-item">
                                                   <button className="btn btn-primary" type="submit" >Login</button>
                                                </li>
                                                <li className="list-inline-item">
                                                   <Link className="btn btn-primary" to="/signup">Singup</Link>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>   
                                 </div>   
                                 </form>
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

export default AdminLogin;
