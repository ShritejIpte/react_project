import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import {NavigationBar} from './component/NavigationBar';
import {Card, Container,Row,Col,Table} from 'react-bootstrap';
import DataTable, { createTheme } from 'react-data-table-component';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const table_data = [];
const columns = [
  {
    name: 'Sr.no',
    selector: 'company_name',
    sortable: true,
  },
  {
    name: 'Invoice Number',
    selector: 'website',
    sortable: true,
  }, 
  {
    name:'Created Date',
    selector: 'first_name',
    sortable: true,
  },
  {
    name:'Status',
    selector: 'first_name',
    sortable: true,
  },
   {
    name:'Action',
    selector: 'first_name',
    sortable: true,
  },
  
  
  ];
// export const Invoices_list = () => (
  class Invoices_list extends Component {
      constructor(props){
        super(props);
        this.state = {data:[]}
 
      }
 render() {
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
                              title="Search Result"
                              columns={columns}
                              // data={this.props.dataFromParent}
                              data={table_data}
                              pagination
                              
                              // progressPending={this.props.pending}
                              // progressComponent={<LinearIndeterminate />}
                              
                            />
                              <div className="row mb-5">
                                  <div className="col-lg-8 col-md-8">
                                      <div className="details">
                                          <p className="name">Invoice Info</p>
                                          <p>#5669626</p>
                                          {/* <p>To:</p>
                                          <p>Machi</p>
                                          <p>795 Folsom Ave, Suite 600</p>
                                          <p>San Francisco, CA, 94107</p>
                                          <p>P:  (123) 456-7890</p> */}
                                          <p style={{marginBottom:'20px !important'}}>Invoice Date: January 20, 2017</p>
                                          <p>Due Date: January 22, 2017 </p>
                                      </div>
                                  </div>
                                  {/* <div className="col-lg-4 col-md-4">
                                      <div className="details text-right">
                                          <p className="name">Invoice Info</p>
                                          <p>#5669626</p>
                                          <p>To:</p>
                                          <p>Machi</p>
                                          <p>795 Folsom Ave, Suite 600</p>
                                          <p>San Francisco, CA, 94107</p>
                                          <p>P:  (123) 456-7890</p>
                                          <p style={{marginBottom:'20px !important'}}>Invoice Date: January 20, 2017</p>
                                          <p>Due Date: January 22, 2017 </p>
                                          <br/>
                                      </div>
                                  </div> */}
                              </div>
                              <div className="row mb-3">
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
                              </div>
                              <div className="row mb-5">
                                  <div className="col-lg-12 col-md-12 text-right">
                                      <p style={{color:'#1b2a86'}}>Sub - Total amount: $1500</p>
                                      <p style={{color:'#1b2a86'}}>VAT: $35</p>
                                      <p style={{color:'#1b2a86',fontSize:'18px'}}>Grand Total : $1535</p>
                                  </div>
                              </div>
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