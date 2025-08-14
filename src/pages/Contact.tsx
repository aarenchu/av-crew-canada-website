import { Grid, Typography } from '@mui/material';
import SocialMediaBar from '../components/SocialMediaBar';
// import AVStockImg from '../assets/AVStockImg.jpg';
import info from '../assets/info.json';

const Contact: React.FC = () => {
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
          <Typography variant='body1' color='text.secondary'>
            {info.contact.phone}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='h6'>EMAIL</Typography>
          <Typography variant='body1' color='primary.contrastText'>
            {info.contact.email}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='h6'>SOCIAL</Typography>
          <SocialMediaBar isHome={false} />
        </Grid>
      </Grid>
      <Grid>
        {/* <Box
              component='img'
              sx={{ height: '100%', width: '100%', paddingLeft: 10 }}
              src={AVStockImg}
            /> */}
      </Grid>
    </Grid>
  );
};
export default Contact;
