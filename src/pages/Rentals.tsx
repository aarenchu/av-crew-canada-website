import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import SpeakerIcon from '@mui/icons-material/Speaker';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FluorescentIcon from '@mui/icons-material/Fluorescent';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import TvIcon from '@mui/icons-material/Tv';
import MicIcon from '@mui/icons-material/Mic';
import TuneIcon from '@mui/icons-material/Tune';
import RentalItem from '../components/RentalItem';
import { rentalCaptions } from '../utils/retrieveInfo';

const Rentals: React.FC = () => {
  // for smaller screens
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
  const getIcon = (name: string) => {
    switch (name) {
      case 'Speakers':
        return SpeakerIcon;
      case 'Teleprompter':
        return RecordVoiceOverIcon;
      case 'Lights':
        return FluorescentIcon;
      case 'TVs':
        return TvIcon;
      case 'Microphones':
        return MicIcon;
      case 'Mixers':
        return TuneIcon;
      // Projectors / Projector Screen
      default:
        return WebAssetIcon;
    }
  };
  const colors = ['background.paper', 'primary.contrastText', 'primary.main'];
  return (
    <>
      <Typography
        variant='h4'
        align='center'
        paddingBottom={isSmallerScreen ? 5 : 0}
      >
        Rentals
      </Typography>
      <Grid
        container
        spacing={10}
        justifyContent='center'
        alignItems='center'
        style={{ minHeight: '50vh' }}
      >
        {rentalCaptions.map((item, index) => (
          <RentalItem
            RentalIcon={getIcon(item.name)}
            name={item.name}
            color={colors[index % 3]}
            caption={item.caption}
          />
        ))}
      </Grid>
    </>
  );
};
export default Rentals;
