import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer, MDBBtn, MDBBtnGroup} from 'mdbreact'
import './App.css';

const App = () => {
  return(
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Title</MDBCardTitle>
          <MDBCardText>iygiutfiyuglkjnlkjnpoi bjhb jkh ijh iuh  iuh oih oij oij </MDBCardText>
          <MDBBtnGroup>
            <MDBBtn onClick={(_) => alert("hi 1")}>1</MDBBtn>
            <MDBBtn>2</MDBBtn>
            <MDBBtn>3</MDBBtn>
            </MDBBtnGroup>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}
export default App;
