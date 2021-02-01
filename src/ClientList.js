import React,{Component} from "react";
import {Card, Container,Row,Col,Form} from 'react-bootstrap';
import Sidebar from './component/Sidebar';
import {NavigationBar} from './component/NavigationBar';
import { Multiselect } from 'multiselect-react-dropdown';
import ShowAll from './ShowAll';
import {Link, Redirect} from 'react-router-dom';
import {UserConsumer} from './userContext.js'
// import {UserProvider} from './userContext.js'
import UserContext from './userContext'

class ClientList extends Component{
  static contextType = UserContext
  
constructor(props){
    super(props);
    // this.state=initialState;
    //   this.FirstName = this.FirstName.bind(this);
    this.state = {
     company_data:[],
     industry_data:[],
     job_title:[],
     city_data:[],
     state_data:[],
     country_data:[],
     employees_data:[],
     investment_partners_data:[],
     selected_company_data:[], 
     selected_industry_data:[],
     selected_job_title:[],
     selected_city_data:[],
     selected_state_data:[],
     selected_country_data:[],
     selected_employees_data:[],
    selected_investment_partners_data:[],
    search_result:[],
    pending:false,
    result:false,
    redirectToHome:true,
    //  search_result: [{
    //     empCode: "119",
    //     name: "Test employee",
    //     age: "25",
    //     email: "abc@abc.com",
    //     location: "Hyderabad"
    //   }]
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}
//   handleChange(event) {    this.setState({value: event.target.value});  }

  componentDidMount() {

   
       const user = this.context;
    const get_access_token = sessionStorage.getItem('access_token');

      console.log("get_access_token :"+get_access_token);


 fetch('http://127.0.0.1:8000/api/get_dropdown_data', {
      method: 'get',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
    
    }).then((Response) => Response.json()).then((Result) => {
      console.log(Result);
    //   console.log(Result.data.company_name);
    //   if(Result.status==0){
    //      alert(Result.msg);
    //   }else{
    //         this.getData();
            this.setState({ company_data:Result.data.company_name });
            this.setState({ industry_data:Result.data.industry });
            this.setState({ job_title:Result.data.job_title });
            this.setState({ city_data:Result.data.city });
            this.setState({ state_data:Result.data.state });
            this.setState({ country_data:Result.data.country });
            this.setState({ employees_data:Result.data.employees });
            this.setState({ investment_partners_data:Result.data.investment_partners });
            
    //   }

   })


// console.log("SSSSSSS"+sessionStorage.getItem('access_token'));
// console.log(JSON.stringify(sessionStorage.getItem('user_data')));


  }
 
get_result=()=>
{   
     const get_access_token = sessionStorage.getItem('access_token');

    if (sessionStorage.getItem("access_token") != null && sessionStorage.getItem("access_token") != "undefined") {
          var bearer = 'Bearer ' + get_access_token;

 fetch('http://127.0.0.1:8000/api/auth/get_search_result', {
      method: 'post',
            headers: {
                 'Authorization': bearer,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
      body: JSON.stringify({       
        selected_company_data: this.state.selected_company_data,
        selected_industry_data: this.state.selected_industry_data,
        selected_job_title:this.state.selected_job_title,
        selected_city_data:this.state.selected_city_data,
        selected_state_data:this.state.selected_state_data,
        selected_country_data:this.state.selected_country_data,
        selected_employees_data:this.state.selected_employees_data,
        selected_investment_partners_data:this.state.selected_investment_partners_data,
      }),
    }).then((Response) => Response.json()).then((Result) => {
      console.log(Result);
this.setState({search_result:Result});
this.setState({result:true});
   
   })
    }
}

onCompanySelect=(selectedList, selectedItem) =>{
this.setState({selected_company_data: selectedList})
}
onIndustrySelect=(selectedList, selectedItem) =>{
    this.setState({selected_industry_data: selectedList})
}
onJobTitleSelect=(selectedList, selectedItem) =>{
    this.setState({selected_job_title: selectedList})
}
onCitySelect=(selectedList, selectedItem) =>{
    this.setState({selected_city_data: selectedList})
}
onStateSelect=(selectedList, selectedItem) =>{
    this.setState({selected_state_data: selectedList})
}
onCountrySelect=(selectedList, selectedItem) =>{
    this.setState({selected_country_data: selectedList})
}
onEmployeesSelect=(selectedList, selectedItem) =>{
    this.setState({selected_employees_data: selectedList})
}
onInvestmentSelect=(selectedList, selectedItem) =>{
    this.setState({selected_investment_partners_data: selectedList})

}


generate_invoice=()=>{
  alert("generate_invoice");
      const get_access_token = sessionStorage.getItem('access_token');

}

render(){
     const get_access_token = sessionStorage.getItem('access_token');
    //  alert(get_access_token)
    if(get_access_token==null || get_access_token=="undefined"){
         return <Redirect to="/UserLogin"/>
      }
//   const get_access_token = sessionStorage.getItem('access_token');
//       console.log("get_access_token :"+get_access_token);
//     if(get_access_token!=""){

//     return <Redirect to="/UserLogin"/>
//     alert("Return to Login");
//     } 
var showtable="";
if (this.state.result) {
  showtable = <><ShowAll dataFromParent = {this.state.search_result} pending={this.state.pending} /><button onClick={this.generate_invoice} type="button">Generate Invoice</button></>;
} else {
  showtable = "";
}

     return (
         <div>
        <Sidebar/>
        <NavigationBar/>
            <div className="main-view">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <label className="section-title">Search  Query</label>
  {/* <UserConsumer>
       {(value) => (<Avatar user={value}/>)} 
       {(value) => {
          return <div> Hello {value}</div> 
           return <div> Hello {value.user}</div>
       }} 
    </UserConsumer> */}
                                    <Form className="inner-forms">
                                        <Row className="mb-5">
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Company</Form.Label>
                                                    <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.company_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onCompanySelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="company_name" // Property name to display in the dropdown options
                                                   onChange={(e) => this.setState({selected_company_data: e.target.displayValue})}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Industry</Form.Label>
                                                    {/* <Form.Control as="select" > */}
                                                         {/* {this.state.teams.map((team) => <option key={team.label} value={team.label}>{team.label}</option>)} */}
                                                         {/* {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)} */}
                                                    {/* </Form.Control> */}
                                                     <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.industry_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onIndustrySelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="industry" // Property name to display in the dropdown options
                                                    onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Job Title</Form.Label>
                                                     <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.job_title} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onJobTitleSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="job_title" // Property name to display in the dropdown options
                                                   
                                                   onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>City</Form.Label>
                                                    <Multiselect
                                                    options={this.state.city_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onCitySelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="City" // Property name to display in the dropdown options
                                                    onChange={this.handleChange}
                                                    />
                                                 
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>State</Form.Label>
                                                     <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.state_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onStateSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="State" // Property name to display in the dropdown options
                                                   onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Country</Form.Label>
                                                    <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.country_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onCountrySelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="Country" // Property name to display in the dropdown options
                                                   onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Employees</Form.Label>
                                                    <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.employees_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onEmployeesSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="Employees" // Property name to display in the dropdown options
                                                    onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Investment</Form.Label>
                                                    <Multiselect
                                                    //  {this.state.industry_data.map((industry_data) => <option key={industry_data.industry} value={industry_data.industry}>{industry_data.industry}</option>)}
                                                    options={this.state.investment_partners_data} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={this.onInvestmentSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="Investment_partners" // Property name to display in the dropdown options
                                                    onChange={this.handleChange}
                                                    />
                                                </Form.Group>                                        
                                            </Col>
                                           <button onClick={this.get_result} type="button">
                                            Search
                                            </button>
                                        </Row>

                                        <Row className="mb-5">
                                            <Col lg={12} className="text-center">
                                            {showtable}
                                            
                                               {/* <ShowAll dataFromParent = {this.state.search_result} pending={this.state.pending} /> */}
 
                                                {/* {this.state.search_result.map(search_result => <div>{search_result.id}</div>)} */}
                                            </Col>
                                        </Row>
                                       
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>        
         </div>
     )
     }

}

export default ClientList;
