import React from 'react';
import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ServiceButton from './ServiceButton';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        paddingBottom: 5,
      }}
    >
      <AppBar position='relative'>
        <Toolbar
          sx={{
            justifyContent: 'center',
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            columns={{ xs: 3, sm: 6, md: 9 }}
            justifyContent='center'
            justifyItems='center'
          >
            <ServiceButton ServiceIcon={InfoOutlinedIcon} label='About Us' />
            <ServiceButton ServiceIcon={TuneOutlinedIcon} label='AV Services' />
            <ServiceButton
              ServiceIcon={HomeRepairServiceOutlinedIcon}
              label='Installation'
            />
            <ServiceButton ServiceIcon={SpeakerOutlinedIcon} label='Rentals' />
            <ServiceButton ServiceIcon={HeadphonesOutlinedIcon} label='DJ' />
            <ServiceButton
              ServiceIcon={AlternateEmailOutlinedIcon}
              label='Contact Us'
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
