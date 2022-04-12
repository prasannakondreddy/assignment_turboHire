import React, { useState,Component } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import NavB from "./SideBar";


export default class Page2 extends Component{
    render(){
    return(
        <div className="form-container">
        <div style={{background:'#1A8FE626',padding:'1.5rem'}}>
        <div style={{fontSize:'1.2rem',fontWeight:'bold'}}>Name of the Enquiry form</div>
        <div style={{fontSize:'0.8rem'}}>One line description of the form</div>
        <br/>
        <div style={{fontSize:'0.8rem'}}>
          provide the following information to process your application
        </div>
        </div>
        <TextField label="Najbwud" variant="outlined" />
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          placeholder="Enter Your E-mail Address"
          fullWidth
          margin="normal"
          name="emailAddress"
        />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="outlined"
          placeholder="Enter Your Phone Number"
          fullWidth
          margin="normal"
          name="phoneNumber"
        />
        <TextField
          id="alternate-phone"
          label="Alternate Phone"
          variant="outlined"
          placeholder="Enter Your Alternate Phone"
          fullWidth
          margin="normal"
          name="alternatePhone"
        />
      </div>
    )
    }
}
