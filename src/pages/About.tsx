import { Box, Grid, Typography } from '@mui/material';
import AVStockImg from '../assets/AVStockImg.jpg';
import { aboutInfo } from '../utils/retrieveInfo';
const About: React.FC = () => {
  return (
    <Grid container spacing={20}>
      <Grid
        sx={{
          width: '50%',
          paddingLeft: 10,
        }}
      >
        <Box
          component='img'
          sx={{ height: '100%', width: '100%', paddingLeft: 10 }}
          src={AVStockImg}
        />
      </Grid>
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
