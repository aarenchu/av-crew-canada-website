import { Grid, IconButton, Typography, SvgIconProps } from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';
import React from 'react';

interface Props {
  ServiceIcon: React.ComponentType<SvgIconProps>;
  label: string;
  active: string;
}

const ServiceButton: React.FC<Props> = ({ ServiceIcon, label, active }) => {
  const caption = label.toLowerCase().replace(' ', '-');
  return (
    <Grid>
      <NavHashLink
        smooth
        style={{
          textDecoration: 'none',
        }}
        to={`#${caption}`}
      >
        <IconButton
          aria-label={caption}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ServiceIcon
            sx={{
              color: active === caption ? 'primary.contrastText' : '#fff',
            }}
          />
          <Typography
            paddingTop={1}
            variant='caption'
            gutterBottom
            sx={{
              display: 'block',
              color: active === caption ? 'primary.contrastText' : '#fff',
            }}
          >
            {label}
          </Typography>
        </IconButton>
      </NavHashLink>
    </Grid>
  );
};

export default ServiceButton;
