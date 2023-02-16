//import React from "react"
//import Paper from "@material-ui/core/Paper";
//import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {Grid, Typography} from "@material-ui/core";

import { pageStyle } from "./Style.jsx"
import { useNavigate } from "react-router-dom";
import "./QuesStyles.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import "./QuesStyles.css";

import  { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

function LinearProgressWithLabel(props) {
  return (
      <Box  sx={{ minWidth: 35 }}>
        <Typography variant="body2" ><label className='ProgressBarText'>{`${Math.round(props.value,)}%`}</label></Typography>
      </Box>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 50,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === 'light' ? '#005941' : '#F2F2F2',
  },
}
));

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


const Template = (props) => {
    
    let classes = pageStyle()

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/endScreen`; 
    navigate(path);
  }

    return (
        
        <Grid container>
            <h4 className="Progresstitle">Progress</h4>
            <Box sx={{ width: '100%' }}>
            <BorderLinearProgress className='ProgressBarStyle' variant="determinate" value={props.progress} />
            <LinearProgressWithLabel value={props.progress} />
            </Box>
            <Grid item sm={12} className="QuesClassItem">
                <h5 className="QuesDisplay110">Question {props.quesNum + 1}</h5>
                <h3 className="QuesDisplay111">{props.questions.Q}</h3>
            </Grid>
            
            <Grid item sm={12}>
                <Grid container className="PBOptions" >
                    <Grid item sm={12}>
                        {
                            props.questions.O.map( ( option, index) => {
                                return(
                                        <div className="optionsArrangement">
                                        <input type="radio" name="radio" id="my_radio_button_id1" className={classes.options} onClick={() => props.checkAnswer(props.quesNum, props.questions.A ,option.value)}/>
                                        <label htmlFor="my_radio_button_id1">{ option.value }</label>
                                         </div>
                                )
                            })
                        }
                    </Grid>
                </Grid>
                
            </Grid>
            
            <Grid item sm={12} >
                <Grid container className="PBButtonsClass">
                <div className="PrevBtn">
                <Button   onClick={() => props.prevQuestion()} disabled={ props.quesNum === 0 }>
                    <div className="PrevbtnLabel"> Prev </div></Button>
                </div>
                <div className="NextBtn">
                <Button   onClick={() => props.nextQuestion()} disabled={ props.quesNum === props.questionsLength - 1}>
                    <div className="NextBtnLabel"> Next </div></Button>
                </div>
                </Grid>
                <div className="SubmitBtn">
                    <Button onClick={routeChange} disabled={ props.quesNum !== props.questionsLength-1} ><p className="SubmitBtn">Submit Quiz</p></Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Template