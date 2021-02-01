import React from 'react';
import { Navbar, DropdownButton, Dropdown  } from 'react-bootstrap';
import styled from 'styled-components';
import UserContext from '.././userContext'

const Styles = styled.div`
  .navbar { background-color: transparent; }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`; 

     const user_name = sessionStorage.getItem('user_name');
    
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="clearfix">
      {/* <div className="user-info dropdown">
        <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="user-photo"><img src="images/profile-photo.png" alt="Profile Photo" /></span>Welcome, Super Admin
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Settings</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </div> */}
      <div className="user-info float-righ">
      <Dropdown>
    
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <span className='user-photo'><img src='images/profile-photo.png' alt='Profile Photo' /></span>Welcome, {user_name}
        </Dropdown.Toggle>
 
        <Dropdown.Menu className="float-right dropdown-menu-right">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        {/* <DropdownButton id="dropdown-basic-button" title="<span className='user-photo'><img src='images/profile-photo.png' alt='Profile Photo' /></span>Welcome, Super Admin">
        
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </DropdownButton> */}
      </div>
    </Navbar>
  </Styles>
)