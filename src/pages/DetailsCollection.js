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




export default class DetailsCollection extends Component{
   
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
        <div className="fields" style={{width:'40rem'}}>
            <br/>
        <p>1.Name*</p>
        <TextField placeholder="Enter your name" variant="outlined" fullWidth />
        <br/>
        <br></br>
        <p>2.Email*</p>
        <TextField
          
          placeholder="abc@gmail.com"
          variant="outlined"
          fullWidth
        />
        <br/>
        
        <br></br>
        <p>3.Date of Birth</p>
        <TextField
          
          placeholder="DD/MM/YY"
          variant="outlined"
          fullWidth
        />
        
        <br/>
        
        <br></br>
        <p>4.Contact Number</p>
        <TextField
          
          placeholder="Enter your 10 digit mobile number"
          variant="outlined"
          fullWidth
        />
        </div>
      </div>
    )
    }
}
