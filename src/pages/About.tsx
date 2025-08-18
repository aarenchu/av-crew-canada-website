import { Box, Grid, Typography } from '@mui/material';
import { aboutInfo, avCrew } from '../utils/retrieveInfo';

const About: React.FC = () => {
  return (
    <Grid container spacing={40} minHeight={550} justifyContent='center'>
      <Box
        component='img'
        height={650}
        // paddingLeft={20}
        // sx={{ transform: 'translate(50%, 50%)' }}
        src={avCrew}
      />
      <Grid container direction={'column'} spacing={3} paddingLeft={20}>
        <Grid>
          <Typography variant='h4'>About Us</Typography>
        </Grid>
        <Grid>
          <Typography variant='body1'>{aboutInfo}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default About;
