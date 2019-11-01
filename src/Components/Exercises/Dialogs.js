import React,{Fragment,useState} from 'react'

import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Form from './Form'

const styles = makeStyles(theme => ({
    FormControl: {
        width:500
    }
}));



export default ({categories,onCreate}) =>{
 const classes = styles();
  const [open,setOpen] = useState(false);


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
                <Form onSubmit={onCreate} categories={categories} setOpen={setOpen} />

                </DialogContent>
            </Dialog>
        </Fragment>
  )
}
    