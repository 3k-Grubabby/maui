import React from 'react';
import { Grid, Paper,Typography, List, ListItem ,ListItemText  } from '@material-ui/core';


const style = {
    Paper:{ 
        padding:20,
        marginTop:10,
        marginBottom:10,
        height:500,
        overflowY:'auto'
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise:{
        id,
        title='Welcome',
        description='123215125'
    }
})=>{
       return (<Grid container  spacing={2}>
        <Grid item={true} sm={2}>
                    <Paper style={style.Paper}>
                        {
                            exercises.map(([group,exercises])=>
                                
                            {
                               console.log(category)
                            return   !category || category === group
                                    ?   <Typography
                                                    variant='inherit'
                                                    key={group}
                                                >

                                                {group}
                                    
                                                <List
                                                    component="nav"
                                                >
                                                    {
                                                        exercises.map(({id,title})=>
                                                            <ListItem 
                                                                button
                                                                key={id}
                                                                onClick={()=>onSelect(id)}
                                                            >
                                                                <ListItemText  
                                                                    primary={title} 
                                                                />
                                                            </ListItem>
                                                        )
                                                    }   
                    
                                                </List>
                                        </Typography>

                                    :null

                                }
                            )
                        }
    
                    </Paper>
        </Grid>
        <Grid item={true} sm={10}>
            <Paper style={style.Paper}>
                <Typography 
                    variant="h3"
                >
                        {title}
                </Typography>
                <Typography 
                    variant="body1"
                    style={{marginTop:20}}
                >
                        {description} 
                </Typography>
            </Paper>
  

        </Grid>
    </Grid>)

}


