import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
});

export default function Home({home, onClick}) {
     const classes = useStyles()
     return (
 <Grid
  container
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '40vh' }}
  >
  <Grid item xs={5}>
    <Card onClick={onClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="/photos/zillow111.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{home.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {home.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
  </Grid>
  </Grid> 
)
}

