import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props)=>{
  return (
    <AppBar position="static">
           <Toolbar>
                <Typography variant="overline" color="inherit" >
                    Exercises Databases
                </Typography>
            </Toolbar>
    </AppBar>
  );
}

export default Header;