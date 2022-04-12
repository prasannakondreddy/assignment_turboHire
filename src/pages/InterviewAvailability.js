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




export default class InterviewAvailability extends Component{
   
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
        <br></br>
        <p>1.Email*</p>
        <TextField
          
          placeholder="abc@gmail.com"
          variant="outlined"
          fullWidth
        />
        <br/>
        
        <br></br>
        <p>2.Location</p>
        <TextField
          
          placeholder="Search or enter your location"
          variant="outlined"
          fullWidth
        />
        <br/>
        
        <br></br>
        <p>3.Interview Date</p>
        <TextField
          
          placeholder="DD/MM/YY"
          variant="outlined"
          fullWidth
        />

<br/>
        
        <br></br>
        <p>4.Interview Time</p>
        <TextField
          
          placeholder="12:00"
          variant="outlined"
          fullWidth
        />
        
        <br/>
        
        <br></br>
        <p>5.Time Zone</p>
        <TextField
          
          placeholder="Search or select a time zone from below"
          variant="outlined"
          fullWidth
        />

<br/>
        
        <br></br>
        <p>6.Interview Meduim</p>
        <TextField
          
          placeholder="Search or select interview medium from below"
          variant="outlined"
          fullWidth
        />
        </div>
      </div>
    )
    }
}
