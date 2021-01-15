import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  // Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  Object.values(errors).forEach(val => val.length > 0 );
  return valid;
};

class UserRegisteration extends Component{

constructor(props){
    super(props);
    this.state={
        FirstName:null,
        LastName:null,
        Email:null,
        PhoneNo:null,
        Password:null,
        CPassword:null,
        Company:null,
        Country:null,
        errors: {
                    FirstName:'',
                    LastName:'',
                    Email:'',
                    PhoneNo:'',
                    Password:'',
                    CPassword:'',
                    Company:'',
                    Country:'',
                }
    }
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
    let errors = this.state.errors;

    switch (name) {
      case 'FirstName': 
        errors.FirstName = 
          value.length < 5
            ? 'First Name must be at least 5 characters long!'
            : '';
        break;
      case 'LastName': 
        errors.LastName = 
          value.length < 5
            ? 'First Name must be at least 5 characters long!'
            : '';
        break;
      case 'Email': 
        errors.Email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'Password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.errors);
    console.log(validateForm(this.state.errors));
    // console.log(this.handleChange(event));
    // if(this.handleChange(event)){
    //            alert("Form submitted");
    //         }else{
    //            alert("Form has errors.")
    //         }

    if(validateForm(this.state.errors)) {
        //   if(this.handleChange()){
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
 register(){ 

   console.log(this.state.UserName);
   console.log(this.state.Email);
   console.log(this.state.PhoneNo);
   console.log(this.state.Password);
   console.log(this.state.CPassword);
   console.log(this.state.Company);
   console.log(this.state.Country);

    fetch('http://127.0.0.1:8000/api/user_register', {
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
// console.log(Result);
        if (Result.status == 1)

                // this.props.history.push("/Dashboard");
          alert('Authenticated User !!!!!')

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })
}
    render(){
         const {errors} = this.state;
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
                                    <form onSubmit={this.handleSubmit} noValidate>
                                    <div className="form-horizontal">        
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6"> 
                                                <div className="form-group">
                                                    <label className="col-form-label">First Name</label>
                                                    {/* <input type="text" className="form-control" onChange={(e) => this.FirstName(e)} name="fname"/> */}
                                                    <input type="text" className="form-control" name="FirstName"  onChange={this.handleChange}  noValidate/>
                                                    {/* <input type="text" className="form-control" onChange={this.UserName} name="name"/> */}
                                                    {errors.FirstName.length > 0 &&  <span className='error'>{errors.FirstName}</span>}
                                                  
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6"> 
                                                <div className="form-group">
                                                    <label className="col-form-label">Last Name</label>
                                                    {/* <input type="text" className="form-control" onChange={this.LastName}/> */}
                                                    <input type="text" className="form-control" name="LastName" onChange={this.handleChange}  noValidate />
                                                    {/* <input type="text" className="form-control" onChange={this.UserName} name="name"/> */}
                                                   {errors.LastName.length > 0 &&  <span className='error'>{errors.LastName}</span>}
                                                  
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Email</label>
                                                    {/* <input type="text" className="form-control" onChange={this.Email} /> */}
                                                    <input type="text" className="form-control" name="Email"  onChange={this.handleChange}  noValidate />
                                                   {errors.Email.length > 0 &&  <span className='error'>{errors.Email}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Phone Number</label>
                                                    <input type="text" className="form-control" name="PhoneNo" onChange={this.handleChange} noValidate/>
                                                  
                                                </div>
                                            </div>   
                                           <div className="col-lg-6 col-md-6">       
                                                <div className="form-group">
                                                    <label className="col-form-label">Password</label>
                                                    <input type="password" className="form-control" name="Password"  onChange={this.handleChange} noValidate/>
                                                   
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">    
                                                <div className="form-group">
                                                    <label className="col-form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" name="CPassword"  onChange={this.handleChange} noValidate/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">  
                                                <div className="form-group">
                                                    <label className="col-form-label">Company / Competitor </label>
                                                    <input type="text" className="form-control" name="Company"  onChange={this.handleChange} noValidate/>
                                                </div>
                                            </div>   
                                            <div className="col-lg-6 col-md-6">     
                                                <div className="form-group">
                                                    <label className="col-form-label">Country</label>
                                                    <input type="text" className="form-control" name="Country"  onChange={this.handleChange} noValidate/>
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
                                                    <p> Already user then proceed to <Link  to="/login"> Login </Link></p>
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