import { Grid, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import {
  avServicesInfo,
  conferenceImg,
  concertImg,
  weddingImg,
  retreatImg,
  livestreamImg,
} from '../utils/retrieveInfo';

const AVServices: React.FC = () => {
  return (
    <>
      <Typography variant='h4' align='center' paddingBottom={5}>
        AV Services
      </Typography>
      <Grid
        container
        sx={{ transform: 'translateX(1.5%)' }}
        spacing={3}
        minHeight={500}
      >
        <ServiceCard
          title={'Conferences'}
          description={avServicesInfo.conferences}
          image={conferenceImg}
        />
        <ServiceCard
          title={'Concerts'}
          image={concertImg}
          description={avServicesInfo.concerts}
        />
        <ServiceCard
          image={weddingImg}
          title={'Weddings'}
          description={avServicesInfo.weddings}
        />
        <ServiceCard
          title={'Retreats'}
          image={retreatImg}
          description={avServicesInfo.retreats}
        />
        <ServiceCard
          image={livestreamImg}
          title={'Livestream'}
          description={avServicesInfo.livestream}
        />
      </Grid>
    </>
  );
};
export default AVServices;
