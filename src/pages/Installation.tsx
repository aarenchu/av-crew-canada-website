import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { srcset } from '../utils/helperFunctions';
import { installationImages } from '../utils/retrieveInfo';

const Installation: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemData = installationImages;

  const imgListRowSize = 121;
  return (
    <>
      <Typography variant='h4' align='center'>
        Installation
      </Typography>
      <ImageList
        sx={{
          alignSelf: isMobile ? 'auto' : 'center',
          height: isMobile ? 'auto' : 470,
          paddingX: isMobile ? 5 : 20,
          paddingTop: 5,
        }}
        variant={isMobile ? 'standard' : 'quilted'}
        cols={isMobile ? 1 : 4}
        rowHeight={isMobile ? 'auto' : imgListRowSize}
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
            cols={isMobile ? 1 : item.cols}
            rows={isMobile ? 1 : item.rows}
          >
            <img
              {...srcset(
                item.img,
                isMobile ? 1 : imgListRowSize,
                item.rows,
                item.cols
              )}
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
