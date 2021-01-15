import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// const validateForm = (errors) => {
//   let valid = true;
//   // Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   Object.values(errors).forEach(val => val.length > 0 );
//   return valid;
// };
const initialState={
        FirstName:"",
        LastName:"",
        Email:"",
        PhoneNo:"",
        Password:"",
        CPassword:"",
        Company:"",
        Country:"",
        // EmailError:"",
        ErrorFirstName:"",
        ErrorLastName:"",
        ErrorEmail:"",
        ErrorPhoneNo:"",
        ErrorPassword:"",
        ErrorCPassword:"",
        ErrorCompany:"",
        ErrorCountry:"",
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
class UserRegisteration extends Component{

constructor(props){
    super(props);
    this.state=initialState;
    //   this.FirstName = this.FirstName.bind(this);
}
//   FirstName(event) {
//     this.setState({ FirstName: event.target.value });
//   }
//   LastName = (event) => {
//     this.setState({ LastName: event.target.value });
//   }
//   Email = (event) => {
//     this.setState({ Email: event.target.value });
//   }
//   PhoneNo = (event) => {
//     this.setState({ PhoneNo: event.target.value });
//   }
//   Password = (event) => {
//     this.setState({ Password: event.target.value });
//   }
//   CPassword = (event) => {
//     this.setState({ CPassword: event.target.value });
//   }
//   Company = (event) => {
//     this.setState({ Company: event.target.value });
//   }
//   Country = (event) => {
//     this.setState({ Country: event.target.value });
//   }
 
 

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // let errors = this.state.errors;

    // switch (name) {
    //   case 'FirstName': 
    //     errors.FirstName = 
    //       value.length < 5
    //         ? 'First Name must be at least 5 characters long!'
    //         : '';
    //     break;
    //   case 'LastName': 
    //     errors.LastName = 
    //       value.length < 5
    //         ? 'First Name must be at least 5 characters long!'
    //         : '';
    //     break;
    //   case 'Email': 
    //     errors.Email = 
    //       validEmailRegex.test(value)
    //         ? ''
    //         : 'Email is not valid!';
    //     break;
    //   case 'Password': 
    //     errors.password = 
    //       value.length < 8
    //         ? 'Password must be at least 8 characters long!'
    //         : '';
    //     break;
    //   default:
    //     break;
    // }

    this.setState({[name]: value});
  }


validate=()=>{
 console.log(this.state.FirstName.length);
  if(this.state.FirstName.length < 5){
    // this.state.EmailError = "Invalid Error";
     this.setState({ ErrorFirstName:"First Name must be at least 5 characters long!"});   
       return false;
  }
  if(!this.state.Email.includes('@')){
    // this.state.EmailError = "Invalid Error";
     this.setState({ ErrorEmail:"Invalid Email Address"});   
       return false;
  }
  // if(this.state.LastName.length < 5){
  //   // this.state.EmailError = "Invalid Error";
  //    this.setState({ ErrorLastName:"Last Name must be at least 5 characters long!"});   
  //      return false;
  // }

// if(this.state.EmailError){
//   this.state.EmailError="Invalid Email Address";
//    this.setState({ EmailError:"Invalid Email Address"});
//     return false;
// }  
 return true;
}
  handleSubmit = (event) => {
    event.preventDefault();

  const isValid= this.validate();
    if(isValid){
      console.log(this.state);
      // this.setState(initialState);
      this.setState({ ErrorEmail:""});
      this.setState({ ErrorFirstName:""});
      this.register();
    }else{
      console.log(this.state);
    console.log("ERROR");
    }

    // console.log(this.state.errors);
    // console.log(validateForm(this.state.errors));
    // console.log(this.handleChange(event));
    // if(this.handleChange(event)){
    //            alert("Form submitted");
    //         }else{
    //            alert("Form has errors.")
    //         }

    // if(validateForm(this.state.errors)) {
    //     //   if(this.handleChange()){
    //   console.info('Valid Form')
    // }else{
    //   console.error('Invalid Form')
    // }
  }
 register(){ 

    // fetch('http://127.0.0.1:8000/api/user_register', {
    fetch('http://127.0.0.1:8000/api/auth/signup', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
                              first_name: this.state.FirstName,
                              last_name: this.state.LastName,
                              mobile_no: this.state.PhoneNo,
                              email_id: this.state.Email,
                              password: this.state.Password,
                              company: this.state.Company,
                              country: this.state.Country      
                           })
        }).then((Response) => Response.json()).then((Result) => {
          console.log(Result);
        if (Result.status == 1)

          alert('Authenticated User !!!!!')

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })
}
    render(){
        //  const {errors} = this.state;
        return (
            <div className="login-bg">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-8 offset-lg-2">
                        <img src="/images/logo-white.png" className="logo d-block m-auto pt-3 pb-2" />
                        <div className="login-holder">
                            <div className="login-holder-inner">
                                <div className="login-input">
                                    <h2>SIGN UP</h2>
                                    <form onSubmit={this.handleSubmit} >
                                    <div className="form-horizontal">        
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6"> 
                                                <div className="form-group">
                                                    <label className="col-form-label">First Name</label>
                                                    {/* <input type="text" className="form-control" onChange={(e) => this.FirstName(e)} name="fname"/> */}
                                                    <input type="text" className="form-control" name="FirstName" placeholder="Enter First Name" onChange={this.handleChange}  noValidate/>
                                                    {/* <input type="text" className="form-control" onChange={this.UserName} name="name"/> */}
                                                    {/* {errors.FirstName.length >0 &&  <span className='error'>{errors.FirstName}</span>} */}
                                                 {this.state.ErrorFirstName}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6"> 
                                                <div className="form-group">
                                                    <label className="col-form-label">Last Name</label>
                                                    {/* <input type="text" className="form-control" onChange={this.LastName}/> */}
                                                    <input type="text" className="form-control" name="LastName" onChange={this.handleChange}  placeholder="Enter Last Name" noValidate />
                                                    {/* <input type="text" className="form-control" onChange={this.UserName} name="name"/> */}
                                                   {/* {errors.LastName.length > 0 &&  <span className='error'>{errors.LastName}</span>} */}
                                                  {this.state.ErrorLastName}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Email</label>
                                                    {/* <input type="text" className="form-control" onChange={this.Email} /> */}
                                                    <input type="text" className="form-control" name="Email"  onChange={this.handleChange}  placeholder="Enter Email" />
                                                   {this.state.ErrorEmail}
                                                  
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Phone Number</label>
                                                    <input type="text" className="form-control" name="PhoneNo" onChange={this.handleChange} placeholder="Enter Phone Number" noValidate/>
                                                  {this.state.ErrorPhoneNo}
                                                </div>
                                            </div>   
                                           <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Password</label>
                                                    <input type="password" className="form-control" name="Password"  onChange={this.handleChange}  placeholder="Enter Password" noValidate/>
                                                    {this.state.ErrorPassword}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" name="CPassword"  onChange={this.handleChange} placeholder="Enter Confirm Password" noValidate/>
                                                   {this.state.ErrorCPassword}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">  
                                                <div className="form-group">
                                                    <label className="col-form-label">Company / Competitor </label>
                                                    <input type="text" className="form-control" name="Company"  onChange={this.handleChange} placeholder="Enter Company / Competitor " noValidate/>
                                                   {this.state.ErrorCompany}
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">     
                                                <div className="form-group">
                                                    <label className="col-form-label">Country</label>
                                                    <input type="text" className="form-control" name="Country"  onChange={this.handleChange} placeholder="Enter Country" noValidate/>
                                                {this.state.ErrorCountry}
                                                </div>
                                            </div>   
                                            <div className="col-lg-12 col-md-12">  
                                                <div className="form-group mb-0">
                                                    <ul className="list-inline text-center mb-0">
                                                        <li className="list-inline-item">
                                                            {/* <button className="btn btn-primary" disabled={name == '' || email == '' || password == '' || phone == '' || emailError || phoneError || passwordError} onClick={() => this.submit()}>Signup</button> */}
                                                        </li>
                                                        <li className="list-inline-item">                                                        
                                                            {/* <input type="button" className="btn btn-primary" onClick={(e) => this.register(e)}  color="success" value="Create Account"/> */}
                                                            <input type="submit" className="btn btn-primary" color="success" value="Create Account"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                                    <p> Already user then proceed to <Link  to="/UserLogin"> Login </Link></p>
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
        );
    }

}

export default UserRegisteration;