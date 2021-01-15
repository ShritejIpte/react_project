import React from 'react';
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import {NavigationBar} from './component/NavigationBar';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Reports = () => (
  <>
  <Sidebar />
    <NavigationBar />
  <Wrapper>
    <h2>Reports</h2>
  </Wrapper>
  </>
)