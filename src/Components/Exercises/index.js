import React,{Fragment} from 'react';
import { Grid, Paper,Typography, List, ListItem ,ListItemText  } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Form from './Form'
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
    muscles,
    exercises,
    category,
    onSelect,
    editMode,
    exercise,
    exercise:{
        id,
        title='Welcome',
        description='123215125'
    },
    onDelete,
    onSelectEdit,
    onEdit
})=>{
       return (<Grid container  spacing={2}>
        <Grid item={true} sm={2}>
                    <Paper style={style.Paper}>
                        {
                            exercises.map(([group,exercises])=>
                                
                            {
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
                                                            <ListItemSecondaryAction>
                                                                <IconButton onClick={()=>onSelectEdit(id)}>
                                                                    <Edit />
                                                                </IconButton>
                                                                <IconButton onClick={()=>onDelete(id)}>
                                                                     <DeleteIcon />
                                                                </IconButton>

                                                            </ListItemSecondaryAction>



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
                {
                    editMode
                    ? <Form categories={muscles} onSubmit={onEdit} exercise={exercise} />
                    : <Fragment>
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

                     </Fragment>
                }

            </Paper>
  

        </Grid>
    </Grid>)

}


