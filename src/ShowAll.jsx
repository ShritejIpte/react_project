import React, { Component } from 'react';
// import DataTable from 'react-data-table-component';
import DataTable, { createTheme } from 'react-data-table-component';
import LinearProgress from '@material-ui/core/LinearProgress';
var data =[];
var pending = true;

   
    // const result = this.props.dataFromParent;
const columns = [
  {
    name: 'Company Name',
    selector: 'company_name',
    sortable: true,
  },
  {
    name: 'Website',
    selector: 'website',
    sortable: true,
  }, 
  {
    name:'First Name',
    selector: 'first_name',
    sortable: true,
  },
  {
    name:'Last Name',
    selector: 'last_name',
    sortable: true,
  },
  {
    name:'Job Title',
    selector: 'job_title',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email_id',
    sortable: true,
  },
  {
    name: 'Linkedin',
    selector: 'Linkedin',
    sortable: true,
  },
  {
    name: 'Twitter',
    selector: 'Twitter',
    sortable: true,
  },
  {
    name: 'Instagram',
    selector: 'Instagram',
    sortable: true,
  },
  {
    name: 'Facebook',
    selector: 'Facebook',
    sortable: true,
  },
  {
    name: 'YouTube',
    selector: 'YouTube',
    sortable: true,
  },
  {
    name: 'Blog',
    selector: 'Blog',
    sortable: true,
  },
  {
    name: 'Phone No',
    selector: 'phone_umber',
    sortable: true,
  },
  {
    name: 'Location',
    selector: 'Location',
    sortable: true,
  },
  {
    name: 'City',
    selector: 'City',
    sortable: true,
  },
  {
    name: 'State',
    selector: 'State',
    sortable: true,
  },
  {
    name: 'Country',
    selector: 'Country',
    sortable: true,
  },
  {
    name: 'Employees',
    selector: 'Employees',
    sortable: true,
  },
  {
    name: 'Funding',
    selector: 'Funding',
    sortable: true,
  },
  {
    name: 'Channel Partners',
    selector: 'Channel_partners',
    sortable: true,
  },
  {
    name: 'Investment Partners',
    selector: 'Investment_partners',
    sortable: true,
  },
  {
    name: 'Technology Partners',
    selector: 'Technology_partners',
    sortable: true,
  },
  {
    name: 'Clients',
    selector: 'Clients',
    sortable: true,
  },
];
class ShowAll extends Component {
    constructor(props){
    super(props);
  this.state = {data:[]}
 
}
componentWillUpdate(){
    //   data = JSON.stringify(this.props.dataFromParent);
    // //  data = this.props.dataFromParent;
    //  console.log("data");
    //  console.log(data);
      // data = [{ id: 1, company_name: 'Conan the Barbarian', year: '1982' },{ id: 2, company_name: 'Conan the Barbarian', year: '1982' }];
   
    // this.setState({data: data});
}
  render() {
    return (
      <div>  
      {/* {this.state.search_result.map(search_result => <div>{search_result.id}</div>)} */}
      {/* asdgsadg {this.props.dataFromParent.empCode} */}
      {/* Data from parent is:{JSON.stringify(this.props.dataFromParent)} */}
       <DataTable
        title="Search Result"
        columns={columns}
        data={this.props.dataFromParent}
        // data={data}
        pagination
        progressPending={this.props.pending}
        // progressComponent={<LinearIndeterminate />}
        
      />
                 </div>
    );
  }
}

export default ShowAll;
