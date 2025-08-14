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

  const instagramLink = 'https://www.instagram.com/';
  const fbLink = 'https://www.facebook.com/';
  const xLink = 'https://x.com/';

  const iconColour = isHome ? 'text.primary' : 'text.secondary';

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
        <IconButton
          aria-label='instagram'
          href={instagramLink}
          sx={{
            color: iconColour,
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton
          aria-label='facebook'
          href={fbLink}
          sx={{
            color: iconColour,
          }}
        >
          <FacebookOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton
          aria-label='x-twitter'
          href={xLink}
          sx={{
            color: iconColour,
          }}
        >
          <XIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default SocialMediaBar;
