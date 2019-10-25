import React from 'react';
import { Grid, Paper,Typography, List, ListItem ,ListItemText  } from '@material-ui/core';

import RightPane from './RightPane';


const style = {
    Paper:{ padding:20,marginTop:10,marginBottom:10}
}

export default ({exercises})=>{
   return (<Grid container  spacing={2}>
        <Grid item sm>
                    <Paper style={style.Paper}>
                        {
                            exercises.map(([group,exercises])=>

                                <Typography
                                        variant='inherit'
                                    >

                                    {group}
                        
                                    <List
                                        component="nav"
                                    >
                                        {
                                            exercises.map((exercise)=>
                                                <ListItem>
                                                    <ListItemText  primary={exercise.title} />
                                                </ListItem>
                                            )
                                        }   
        
                                    </List>
                               </Typography>
                            )
                        }
    
                    </Paper>
        </Grid>
        <Grid item sm >
                <RightPane styles={style} />
        </Grid>
    </Grid>)

}


