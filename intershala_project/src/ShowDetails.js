import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function ShowDetails() {
  const [show, setShow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); 
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
   
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      {show && (
        <div>
          <Typography variant="h3" align="center" gutterBottom>{show.name}</Typography>
          <Typography variant="body1" gutterBottom>{show.summary && show.summary.replace(/<[^>]*>/g, '')}</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button component={Link} to="/" variant="contained" color="primary">Back to Show List</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={handleBookTicket}>Book Ticket</Button>
            </Grid>
          </Grid>
        </div>
      )}

     
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Book Ticket</DialogTitle>
        <DialogContent>
          <TextField
            label="Movie Name"
            value={show ? show.name : ''}
            fullWidth
            disabled
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Price"
            value={"100$"}
            disabled
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Show Time"
            value={"2:25pm"}
            disabled
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ShowDetails;
