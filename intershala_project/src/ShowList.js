import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>Show List</Typography>
      <Grid container spacing={3} justifyContent="center">
        {shows.map(show => (
          <Grid item key={show.show.id}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea component={Link} to={`/show/${show.show.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={show.show.image ? show.show.image.medium : ""}
                  alt={show.show.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">{show.show.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ShowList;
