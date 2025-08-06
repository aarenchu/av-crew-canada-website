import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
}

// TODO: get words from a json file

const ServiceCard: React.FC<Props> = ({ title }) => {
  const imgSrc = '';
  return (
    <Grid>
      <Card sx={{ maxWidth: 275 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgSrc}
          title={title.toLowerCase().replace(' ', '-')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServiceCard;
