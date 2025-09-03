import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { aboutInfo, avCrewImages } from '../../utils/retrieveInfo';
import { srcset } from '../../utils/helperFunctions';

const DesktopAbout: React.FC = () => {
  return (
    <Grid container spacing={20} minHeight={550} justifyContent='center'>
      <ImageList variant='quilted' cols={4} rowHeight={175}>
        {avCrewImages.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 150, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid container direction={'column'} spacing={3} width={'35%'}>
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
export default DesktopAbout;
