import React, { memo } from 'react';
import {AppBar, Paper, Toolbar, Typography} from '@material-ui/core'
import DoneAllSharpIcon from '@material-ui/icons/DoneAllSharp';
import './Layout.scss';


const Layout = memo(props => (
    <Paper elevation={0}  style={{padding: 0, margin: 0}}>
        <AppBar color="primary" position="static" style={{ height: 62 }}>
            <Toolbar style={{height: 62 }}>
                <a href="https://www.linkedin.com/in/joseph-liao-8a188635/" className="link">
                    <Typography id="titleWrapper" >
                        <DoneAllSharpIcon/> React Todo List: (Code Exercise)
                    </Typography>
                </a>
            </Toolbar>
        </AppBar>
        {props.children}
    </Paper>
));

export default Layout;