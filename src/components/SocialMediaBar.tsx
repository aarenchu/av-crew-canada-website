import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
interface Props {
  isHome: boolean;
}
const SocialMediaBar: React.FC<Props> = ({ isHome }) => {
  const [alignment, setAlignment] = useState('flex-start');
  const [spacing, setSpacing] = useState({});
  const [columns, setColumns] = useState({});

  useEffect(() => {
    if (isHome) {
      setAlignment('center');
      setSpacing({ xs: 2, md: 2 });
      setColumns({ xs: 2, sm: 2, md: 2 });
    }
  }, [isHome]);

  return (
    <Grid
      container
      spacing={spacing}
      columns={columns}
      justifyContent={alignment}
      justifyItems={alignment}
    >
      <Grid>
        <IconButton aria-label='instagram' href='https://www.instagram.com/'>
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton aria-label='facebook' href='https://www.facebook.com/'>
          <FacebookOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton aria-label='x-twitter' href='https://x.com/'>
          <XIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default SocialMediaBar;
