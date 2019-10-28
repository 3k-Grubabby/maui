import React from 'react';
import {Paper,Tabs, Tab} from '@material-ui/core';



const Footer = ({muscles,category,onSelect})=>{
  const index = category ? muscles.findIndex(group=>group===category)+1 : 0;
  
  const onIndexSelect = (e,index)=>{
    console.log(muscles[index-1])
    onSelect(index===0?'':muscles[index-1])
  }

  return (
    <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
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
