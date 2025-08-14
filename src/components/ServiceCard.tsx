import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ title, description }) => {
  const imgSrc = '';
  return (
    <Grid>
      <Card sx={{ height: 400, width: 220 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={imgSrc}
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
