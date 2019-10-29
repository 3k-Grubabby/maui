import React,{Fragment,useState} from 'react'

import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    FormControl: {
        width:500
    }
}));



export default ({categories,onCreate}) =>{
    const classes = styles();
  const [open,setOpen] = useState(false);
  const [values,setValues] = useState({
    title : 'Cat is the Hat',
    description : 'test 5 ',
    muscles : 'his si cat',
  });
  const handleChange = name =>event=>{
    setValues({...values,[name]:event.target.value})
  };

 const handleSubmit = ()=>{
     setOpen(!open);
     onCreate({...values,id:values.title.toLocaleLowerCase().replace(/ /g,'-')})

 };

  return (
    <Fragment>
          <Fab  aria-label="add"  onClick={()=>{setOpen(!open)}}>
            <AddIcon />
          </Fab>
            <Dialog open={open}   aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">create new exercise</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <form>
                  <TextField
                      label="Title"
                      value={values.title}
                      onChange={handleChange('title')}
                      margin="normal"
                      className={classes.FormControl}
                    />

                    <br />
                    <FormControl  className={classes.FormControl} >
                          <InputLabel htmlFor="muscles">Muscles</InputLabel>
                          <Select
                            value={values.muscles}
                            onChange={handleChange('muscles')}
                          >
                            {
                              categories.map((category,index)=>{
                                return <MenuItem key={index} value={category}>{category}</MenuItem>
                              })
                            }

                          </Select>
                    </FormControl>

                    <br />
                    <TextField
                      className={classes.FormControl}
                      label="Description"
                      multiline
                      rows="4"
                      value={values.description}
                      onChange={handleChange('description')}
                      margin="normal"
                    />


                </form>

                </DialogContent>
                <DialogActions>

                <Button   color="primary" onClick={handleSubmit}>
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
  )
}
    