import React, { useState } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import {
    
    TextField,Link
   
  } from "@material-ui/core";
import FormContainer from "./FormContainer";
import {NavLink} from "react-router-dom";


function SideBar(){
return (
    

          // {/* <li><TextField
          //   id="email"
          //   label="E-mail"
          //   variant="outlined"
          //   placeholder="Enter Your E-mail Address"
          //   fullWidth
          //   margin="normal"
          //   name="emailAddress"
          // /></li> */}

  <>
   
    <div className="side-bar">
      <ul>

        <Card style={{ width: '20rem' }} className="side-bar-comp">
          <div className="img-holder"></div>

          <Card.Body className="card-body">
            <Card.Title className="card-title">New Form</Card.Title>
            <Card.Text className="card-text">
              Start creating a new form with the wide options of fields available
            </Card.Text>

          </Card.Body>

        </Card>

      </ul>
      <div>Explore the following templates:</div>
      <NavLink exact to="/"> <ul>

        <Card style={{ width: '20rem' }} className="side-bar-comp">
          <div className="img-holder"></div>

          <Card.Body className="card-body">
            <Card.Title className="card-title">Details Collection</Card.Title>
            <Card.Text className="card-text">
              Collect information from Candidates on their education,work experience,contact no,etc
            </Card.Text>

          </Card.Body>

        </Card>


      </ul></NavLink>
      <NavLink exact to="/two">
    <ul>

      <Card style={{ width: '20rem' }} className="side-bar-comp">
        <div className="img-holder"></div>

        <Card.Body className="card-body">
          <Card.Title className="card-title">Document Collection</Card.Title>
          <Card.Text className="card-text">
            Save time and efforts.Explore this template to find a set of questions required for document collection
          </Card.Text>

        </Card.Body>

      </Card>

    </ul></NavLink><ul>

      <Card style={{ width: '20rem' }} className="side-bar-comp">
        <div className="img-holder"></div>

        <Card.Body className="card-body">
          <Card.Title className="card-title">Statement of Purpose</Card.Title>
          <Card.Text className="card-text">
            Start creating a new form with the wide options of fields available
          </Card.Text>

        </Card.Body>

      </Card>

    </ul><ul>

      <Card style={{ width: '20rem' }} className="side-bar-comp">
        <div className="img-holder"></div>

        <Card.Body className="card-body">
          <Card.Title className="card-title">Interview Availabality</Card.Title>
          <Card.Text className="card-text">
            Start creating a new form with the wide options of fields available
          </Card.Text>

        </Card.Body>

      </Card>

    </ul>

</div>
</>

)
}
export default SideBar;