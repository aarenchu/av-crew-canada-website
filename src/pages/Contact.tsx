import { Box, Grid, Typography } from '@mui/material';
import SocialMediaBar from '../components/SocialMediaBar';
import AVStockImg from '../assets/AVStockImg.jpg';

const Contact: React.FC = () => {
  const phone = '(123) 456-7890';
  const email = 'hello@reallygoodsite.com';
  return (
    <Grid container padding={5}>
      <Grid container direction={'column'} spacing={3}>
        <Grid>
          <Typography variant='h4'>
            Get a quote or set up a consultation.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='h6'>PHONE</Typography>
          <Typography variant='body1'>{phone}</Typography>
        </Grid>
        <Grid>
          <Typography variant='h6'>EMAIL</Typography>
          <Typography variant='body1'>{email}</Typography>
        </Grid>
        <Grid>
          <Typography variant='h6'>SOCIAL</Typography>
          <SocialMediaBar isHome={false} />
        </Grid>
      </Grid>
      <Grid>
        <Box
          component='img'
          sx={{ height: '100%', width: '100%', paddingLeft: 10 }}
          src={AVStockImg}
        />
      </Grid>
    </Grid>
  );
};
export default Contact;
