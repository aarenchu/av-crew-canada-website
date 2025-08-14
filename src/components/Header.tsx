import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';
// import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ServiceButton from './ServiceButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface HeaderProps {
  visibleSection: string;
}

const Header: React.FC<HeaderProps> = ({ visibleSection }) => {
  return (
    <header id='home'>
      <AppBar position='fixed'>
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
            <ServiceButton
              ServiceIcon={HomeOutlinedIcon}
              label='Home'
              active={visibleSection}
            />
            <ServiceButton
              ServiceIcon={InfoOutlinedIcon}
              label='About Us'
              active={visibleSection}
            />
            <ServiceButton
              ServiceIcon={TuneOutlinedIcon}
              label='AV Services'
              active={visibleSection}
            />
            <ServiceButton
              ServiceIcon={HomeRepairServiceOutlinedIcon}
              label='Installation'
              active={visibleSection}
            />
            <ServiceButton
              ServiceIcon={SpeakerOutlinedIcon}
              label='Rentals'
              active={visibleSection}
            />
            {/* <ServiceButton ServiceIcon={HeadphonesOutlinedIcon} label='DJ' /> */}
            <ServiceButton
              ServiceIcon={AlternateEmailOutlinedIcon}
              label='Contact Us'
              active={visibleSection}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
