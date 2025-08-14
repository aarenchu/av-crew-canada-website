import React from 'react';
import SocialMediaBar from '../components/SocialMediaBar';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import background from '../assets/background.jpg';

const Home: React.FC = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        maxWidth: 1380,
      }}
    >
      <CardMedia component='img' height='700' width='400' image={background} />
      <Typography
        variant='h4'
        position='absolute'
        top='25%'
        left='38%'
        // align='center'
        bgcolor='none'
      >
        AV CREW CANADA
      </Typography>

      {/* TODO: Probably references can go here in carousel style */}
      <Box alignContent='center' top='80%' left='44%' position='absolute'>
        <SocialMediaBar isHome />
      </Box>
    </Card>
  );
};

export default Home;
