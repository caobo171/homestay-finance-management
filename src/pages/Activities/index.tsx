import React, { Component } from "react";
import styled from 'styled-components';
import Calendar from "components/Calendar";

const StyledWrapper = styled.div`
    width: 100%;
    padding: 20px;
`
const Activities  = ()=>{
  return <StyledWrapper>
    <Calendar/>
  </StyledWrapper>
}

export default Activities;