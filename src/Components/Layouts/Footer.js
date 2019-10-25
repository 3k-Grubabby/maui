import React from 'react';
import {Paper,Tabs, Tab} from '@material-ui/core';

const Footer = ({muscles})=>{
  return (
    <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="inherit"
          centered
        >
            <Tab label="ALL" />
            {muscles.map((group,index)=>
            <Tab key={index} label={group} />
            )}
        </Tabs>
    </Paper>  
  );
}

export default Footer;
