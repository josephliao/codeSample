
import React, { memo } from 'react';
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