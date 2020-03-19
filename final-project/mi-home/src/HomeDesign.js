import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function HomeDesign({home, open, handleClose}) {

if (!home.price){
    return <div />
}


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">   
        {home.price} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
  This lovely home is located at {} {home.address}. 
  Its full size is {}{home.size} sqft, it has {}
        {home.bedroom_count} bedrooms and 
        {} {home.bathroom_count} bathrooms. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Not Interested
          </Button>
          <a href = {home.property_url} target = "_blank">
             <Button color="primary" >
             Interested
             </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}