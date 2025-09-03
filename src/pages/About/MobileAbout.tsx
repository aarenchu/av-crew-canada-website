import { ImageList, ImageListItem, Typography } from '@mui/material';
import { aboutInfo, avCrewImagesMobile } from '../../utils/retrieveInfo';
import { srcset } from '../../utils/helperFunctions';

const MobileAbout: React.FC = () => {
  return (
    <>
      <Typography variant='h4' align='center'>
        About Us
      </Typography>
      <ImageList>
        {avCrewImagesMobile.map((item) => (
          <ImageListItem key={item.img}>
            <img
              {...srcset(item.img, 1, 1, 1)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant='body1' p={2}>
        {aboutInfo}
      </Typography>
    </>
  );
};
export default MobileAbout;
