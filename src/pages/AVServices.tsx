import { Box, Grid, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';

const AVServices: React.FC = () => {
  return (
    <Box>
      <Typography variant='h4' align='center' paddingBottom={5}>
        AV Services
      </Typography>
      <Grid
        container
        justifyContent='center'
        justifyItems='center'
        direction='row'
        spacing={2}
      >
        <ServiceCard title={'Conferences'} />
        <ServiceCard title={'Concerts'} />
        <ServiceCard title={'Weddings'} />
        <ServiceCard title={'Livestream'} />
      </Grid>
    </Box>
  );
};
export default AVServices;
