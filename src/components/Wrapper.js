
import React, { useState, useEffect, memo } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Paper, FormControl, InputLabel, Button} from '@material-ui/core';
import './Wrapper.scss';   

const Wrapper = memo(props =>(
  <Paper style={{margin:15, padding:15}}>
    <div className="Wrapper">
        <FormControl 
          noValidate 
          autoComplete="off" 
          variant="outlined"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Adding your next task?</InputLabel>
          <OutlinedInput id="test-input" labelWidth={170}/>
        </FormControl>
  
        <Button 
          variant="contained" 
          color="primary" 
          onClick={props.onButtonClick}>
                Add Tasks
        </Button>
    </div>
  </Paper>
));

export default Wrapper;

/*
export default function Wrapper(){
    const [count, setCount] = useState(0);
    const classes = useStyle;
    
    useEffect(() => {
        // Update the document title using the browser API
        //document.title = `You clicked ${count} times`;
        let CountTest = document.getElementsByClassName('test')[0];
        let inputValue = document.getElementById('test-input').value;
        let outPutWrapper = document.getElementsByClassName('outputwrapper')[0];
        CountTest.innerHTML = `You clicked ${count} times`;

        outPutWrapper.innerHTML = inputValue;

    });

    return (
      <Paper style={{margin:15, padding:15}}>
        <div className="Wrapper">
            <FormControl className={classes.root} className={cn} noValidate autoComplete="off" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Adding your next task?</InputLabel>
                <OutlinedInput id="test-input" labelWidth={170}/>
             
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                Count number of click {count}
            </Button>

            <div className="test">{count}</div> 

            <div className="outputwrapper"></div>
            
        </div>
      </Paper>
    );
}

*/