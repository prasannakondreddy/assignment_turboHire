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
import BottomnavBar from "../bottomnavbar";




export default class SOP extends Component{
   
    render(){
       
    return(
        <>
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
        <p>1.Tell me about a time you were asked to do something you had never done before.How did you react?what did you learn?</p>
        <TextField placeholder="Enter a description for long answer" variant="outlined" fullWidth />
        <br/>
        <br></br>
        <p>2.Tell me about the last time something significant didn't go according to plan at work.What was your role?What was the outcome?</p>
        <TextField
          
          placeholder="Enter a description for long answer"
          variant="outlined"
          fullWidth
        />
        <br/>
        
        <br></br>
        <p>3.What are the three things that are most important to you in a job</p>
        <TextField
          
          placeholder="Enter a description for long answer"
          variant="outlined"
          fullWidth
        />
        
        
        </div>
      </div>
      
      </>
    )
    }
}
