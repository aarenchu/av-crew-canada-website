import { Box, Grid, Typography } from '@mui/material';
import AVStockImg from '../assets/AVStockImg.jpg';
import info from '../assets/info.json';

const About: React.FC = () => {
  return (
    <Grid container spacing={40}>
      <Box
        component='img'
        sx={{
          height: 550,
          // width: '40%',
          paddingLeft: 20,
        }}
        src={AVStockImg}
      />
      <Grid container direction={'column'} spacing={3}>
        <Grid>
          <Typography variant='h4'>About Us</Typography>
        </Grid>
        <Grid>
          <Typography variant='body1'>{info.about}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default About;
