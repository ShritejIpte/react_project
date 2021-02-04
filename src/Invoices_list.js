import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import {NavigationBar} from './component/NavigationBar';
import {Card, Container,Row,Col,Table} from 'react-bootstrap';
import DataTable, { createTheme } from 'react-data-table-component';
import {Link, Redirect} from 'react-router-dom';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

// var table_data = [];
const columns = [
  {
    name: 'Sr.no',
    selector: 'index',
    sortable: true,
    cell: (record, index) => {
      console.log(index);
      console.log(record);
      if(record.payment_status==0){

        return (
            <>{index +1}
                {/* <button
                    className="btn btn-primary btn-sm"                  
                    style={{marginRight: '5px'}}>
                        Make Payment
                </button> */}
               
            </>
        )
    }
      }
  },
  {
    name: 'Invoice Number',
    selector: 'invoice_id',
    sortable: true,
    cell: (record, index) => {
      console.log(index);
      console.log(record);
      if(record.invoice_id==0){
        return (
            <>
                <button
                    className="btn btn-primary btn-sm"                  
                    style={{marginRight: '5px'}}>
                        Generate Invoice
                </button>
               
            </>
        )
    }else{
      return ( 
      <>
        {record.invoice_id}
      </>
      )
    }
      }
  }, 
  {
    name:'Created Date',
    selector: 'created_date',
    sortable: true,
  },
  {
    name:'Status',
    selector: 'payment_status',
    sortable: true,
    cell: (record, index) => {
      console.log(index);
      console.log(record);
      if(record.payment_status==0){

        return (
            <>
                <button
                    className="btn btn-primary btn-sm"                  
                    style={{marginRight: '5px'}}>
                        Make Payment
                </button>
               
            </>
        )
    }
      }
  },
   {
    name:'Action',
    selector: 'first_name',
    sortable: true,
    cell: (record, index) => {
      console.log(index);
      console.log(record);
      return (
          <>
              {/* <button
                  className="btn btn-primary btn-sm"
                  
                  style={{marginRight: '5px'}}>
                      Edit
              </button> */}
              <button 
                  className="btn btn-danger btn-sm" 
                 
                  >
                      Delete
              </button>
          </>
      )
  }
}
  
  
  ];

// this.state = {
//     loading: true,
// }
// }
  
// export const Invoices_list = () => (
  class Invoices_list extends Component {
      constructor(props){
        super(props);
        this.state = {data:[],
          table_data:[],
          loading: true,
          showPaypal: false
        }
 
      }
      showPaypalButtons = () => {
        this.setState({ showPaypal: true });
      };
  componentDidMount() {
    const get_access_token = sessionStorage.getItem('access_token');
    if(get_access_token==null || get_access_token=="undefined"){
      return <Redirect to="/UserLogin"/>
   }

   let bearer = 'Bearer '+get_access_token;
   console.log(bearer);
 fetch('http://127.0.0.1:8000/api/auth/get_invoice_data', {
      method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': bearer,
            },
    
    }).then((Response) => Response.json()).then((Result) => {
      console.log(Result);
      this.setState({table_data:Result}); 
     
      console.log(this.state.table_data);
      // table_data= ;
   })
  }
 render() {
   
  this.config = {
    // key_column: 'id',
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: false,
    button: {
        excel: false,
        print: false
    },
    language: {
        loading_text: "Please be patient while data loads..."
    }
}
    return (
    <>
    <Sidebar />
    <NavigationBar />
    <div className="main-view">
        <Container fluid>
            <Row>
                <Col>
                    <Card className="mb-5">
                        <Card.Body>
                          <div className="order-details">
                           <DataTable
                           
                              title="Invoice Lists"
                              columns={columns}
                              // data={this.props.dataFromParent}
                              data={this.state.table_data}
                              pagination
                              
                              // progressPending={this.props.pending}
                              // progressComponent={<LinearIndeterminate />}
                              
                            />
                              {/* <div className="row mb-5">
                                  <div className="col-lg-8 col-md-8">
                                      <div className="details">
                                          <p className="name">Invoice Info</p>
                                          <p>#5669626</p>
                                          <p>To:</p>
                                          <p>Machi</p>
                                          <p>795 Folsom Ave, Suite 600</p>
                                          <p>San Francisco, CA, 94107</p>
                                          <p>P:  (123) 456-7890</p> 
                                          <p style={{marginBottom:'20px !important'}}>Invoice Date: January 20, 2017</p>
                                          <p>Due Date: January 22, 2017 </p>
                                      </div>
                                  </div>
                                 
                              </div> */}
                              {/* <div className="row mb-3">
                                  <div className="col-lg-12 col-md-12">
                                    <Table bordered hover>
                                      <thead>
                                        <tr style={{backgroundColor:'#7b7b7b', color:'#ffffff'}}>
                                          <th>#</th>
                                          <th>Description</th>
                                          <th>Quantity</th>
                                          <th>Unit Cost</th>
                                          <th>Total</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Data Processing</td>
                                          <td>50</td>
                                          <td>USA</td>
                                          <td>$20</td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Data Processing</td>
                                          <td>100</td>
                                          <td>USA</td>
                                          <td>$50</td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>Data Processing</td>
                                          <td>200</td>
                                          <td>USA</td>
                                          <td>$90</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                              </div> */}
                              {/* <div className="row mb-5">
                                  <div className="col-lg-12 col-md-12 text-right">
                                      <p style={{color:'#1b2a86'}}>Sub - Total amount: $1500</p>
                                      <p style={{color:'#1b2a86'}}>VAT: $35</p>
                                      <p style={{color:'#1b2a86',fontSize:'18px'}}>Grand Total : $1535</p>
                                  </div>
                              </div> */}
                              <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <ul className="list-inline float-right">
                                      <li className="list-inline-item">
                                        <button className="btn btn-primary" style={{minWidth:'170px'}}>Cancel</button>
                                      </li>
                                      <li className="list-inline-item">
                                        <button className="btn btn-primary">Proceed to Payment</button>
                                      </li>
                                    </ul>
                                  </div>
                              </div>
                          </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>  
</>
  );
  }
}

export default Invoices_list;