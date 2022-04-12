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




export default class DocumentCollection extends Component{
   uploadfile(){
       document.getElementById('selectFile').click()
   }
   imgselect(e){
       
   }
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
            <div className="field" style={{width:'15rem'}}>
            <br/>
        <p>1.10th marksheet*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>
        
        <p>2.12th marksheet*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>

        
        <p>3.Graduation marksheet*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>
        <p>4.Post Graduation marksheet*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>
        <p>5.Offer Letter*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>
        <p>6.Salary Slips*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>

        <p>7.Bank Statements*</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>

        <p>8.Increment Letter(if any)</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>

        <p>9.Others(if any)</p>
        <div className="file-holder">
            <button style={{background:'transparent',border:'none',padding:'0.3rem',color:'grey'}} onClick={this.uploadfile.bind(this)}>attach file upto 5kb</button>
        <input id="selectfile" type="file" placeholder="attach" onChange={(e)=>this.imgselect(e)} style={{display: 'none'}}/>
        </div>
        
        
        <br/>
        <br></br>
        
        </div>
        </div>
      </div>
    )
    }
}
