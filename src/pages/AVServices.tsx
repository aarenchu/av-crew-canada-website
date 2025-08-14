import { Grid, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import info from '../assets/info.json';

const AVServices: React.FC = () => {
  const avServices = info['av-services'];
  return (
    <>
      <Typography variant='h4' align='center' paddingBottom={5}>
        AV Services
      </Typography>
      <Grid
        container
        paddingLeft={27}
        paddingRight={25}
        spacing={3}
        height={500}
      >
        <ServiceCard
          title={'Conferences'}
          description={avServices.conferences.description}
        />
        <ServiceCard
          title={'Concerts'}
          description={avServices.concerts.description}
        />
        <ServiceCard
          title={'Weddings'}
          description={avServices.weddings.description}
        />
        <ServiceCard
          title={'Livestream'}
          description={avServices.livestream.description}
        />
      </Grid>
    </>
  );
};
export default AVServices;
