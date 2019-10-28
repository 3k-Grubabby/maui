import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from '../Exercises/Dialogs/Create'

const Header = (props)=>{
  return (
    <AppBar position="static">
           <Toolbar>
                <Typography variant="overline" color="inherit" style={{flex:1}} >
                    Exercises Databases
                </Typography>
                <CreateDialog />
            </Toolbar>
    </AppBar>
  );
}

export default Header;
