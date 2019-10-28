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



export default props =>{

  const [open,setOpen] = useState(false);

  return (
    <Fragment>
          <Fab  aria-label="add"  onClick={()=>{setOpen(!open)}}>
            <AddIcon />
          </Fab>
            <Dialog open={open} onClick={()=>{setOpen(!open)}}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">create new exercise</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <form>
                    
                </form>

                </DialogContent>
                <DialogActions>

                <Button   color="primary" onClick={()=>{setOpen(!open)}}>
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
  )
}
    