import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { srcset } from '../utils/helperFunctions';
import { installationImages } from '../utils/retrieveInfo';

const Installation: React.FC = () => {
  const itemData = installationImages;

  const imgListRowSize = 121;
  return (
    <>
      <Typography variant='h4' align='center'>
        Installation
      </Typography>
      <ImageList
        sx={{ alignSelf: 'center', height: 470, paddingX: 20, paddingTop: 5 }}
        variant='quilted'
        cols={4}
        rowHeight={imgListRowSize}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: 'hidden',
              '& img': {
                transition: 'transform 0.3s ease-in-out',
              },
              '&:hover img': {
                transform: 'scale(1.1)',
              },
              '& .MuiImageListItemBar-root': {
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                transform: 'translateY(100%)',
                transition: 'transform 0.3s ease',
                opacity: 0,
              },
              '&:hover .MuiImageListItemBar-root': {
                transform: 'translateY(0)',
                opacity: 1,
              },
            }}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, imgListRowSize, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar title={item.title} position='top' />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
export default Installation;
