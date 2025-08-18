import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Grid>
      <Card sx={{ height: 450, width: 350 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={image}
          title={title.toLowerCase().replace(' ', '-')}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color='text.secondary'
          >
            {title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'white' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServiceCard;
