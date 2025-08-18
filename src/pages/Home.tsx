import React from 'react';
import SocialMediaBar from '../components/SocialMediaBar';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import background from '../assets/background.jpg';

const Home: React.FC = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        alignContent: 'center',
      }}
    >
      <CardMedia component='img' height='720' image={background} />
      <Typography
        variant='h4'
        position='absolute'
        top='40%'
        left='50%'
        sx={{ transform: 'translate(-50%, -50%)' }}
        bgcolor='none'
      >
        AV CREW CANADA
      </Typography>

      <Box
        alignContent='center'
        top='80%'
        left='50%'
        position='absolute'
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <SocialMediaBar isHome />
      </Box>
    </Card>
  );
};

export default Home;
