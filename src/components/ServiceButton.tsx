import { Grid, IconButton, Typography, SvgIconProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

interface Props {
  ServiceIcon: React.ComponentType<SvgIconProps>;
  label: string;
}

const ServiceButton: React.FC<Props> = ({ ServiceIcon, label }) => {
  const caption = label.toLowerCase().replace(' ', '-');
  return (
    <Grid>
      <IconButton
        aria-label={caption}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        component={RouterLink}
        to={`/${caption}`}
      >
        <ServiceIcon />
        <Typography
          paddingTop={1}
          variant='caption'
          gutterBottom
          sx={{ display: 'block' }}
        >
          {label}
        </Typography>
      </IconButton>
    </Grid>
  );
};

export default ServiceButton;
