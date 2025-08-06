import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SocialMediaBar from '../components/SocialMediaBar';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Box alignContent='center' sx={{ flexGrow: 1 }}>
        <Typography
          variant='h4'
          align='center'
          paddingTop={10}
          paddingBottom={25}
        >
          AV CREW CANADA
        </Typography>
      </Box>
      {/* TODO: Probably references can go here in carousel style */}
      <Box alignContent='center' sx={{ flexGrow: 1 }} paddingTop={20}>
        <SocialMediaBar isHome />
      </Box>
    </Container>
  );
};

export default Home;
