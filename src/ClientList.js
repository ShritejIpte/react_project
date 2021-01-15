import React,{Component} from "react";
import {Card, Container,Row,Col,Form} from 'react-bootstrap';
import Sidebar from './component/Sidebar';
import {NavigationBar} from './component/NavigationBar';
import { Multiselect } from 'multiselect-react-dropdown';
class ClientList extends Component{

constructor(props){
    super(props);



    
    // this.state=initialState;
    //   this.FirstName = this.FirstName.bind(this);
    this.state = {value: 3, teams: [
        {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
    ],
     options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}]
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}
  handleChange(event) {    this.setState({value: event.target.value});  }

  componentDidMount() {

 fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
      body: JSON.stringify({       
        email_id: this.state.Email,
        password: this.state.Password         
      })
    }).then((Response) => Response.json()).then((Result) => {
      console.log(Result);
      if(Result.status==0){
         alert(Result.msg);
      }else{
            this.setState({ access_token:Result.access_token });
            this.getData();
      }

   })



  }

render(){
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

                                    <Form className="inner-forms">
                                        <Row className="mb-5">
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Company</Form.Label>
                                                    <Form.Control as="select"  value={this.state.value} onChange={this.handleChange}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Industry</Form.Label>
                                                    <Form.Control as="select" >
                                                         {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.label}</option>)}
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Job Title</Form.Label>
                                                    <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>City</Form.Label>
                                                    <Multiselect
                                                    options={this.state.options} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    // onSelect={this.onSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                    />
                                                    {/* <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control> */}
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Employees</Form.Label>
                                                    <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Investment</Form.Label>
                                                    <Form.Control as="select" >
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>                                        
                                            </Col>
                                        </Row>

                                        <Row className="mb-5">
                                            <Col lg={12} className="text-center">
                                                Table Here
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
