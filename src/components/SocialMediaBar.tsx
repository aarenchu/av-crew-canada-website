import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { socialsInfo } from '../utils/retrieveInfo';
interface Props {
  isHome: boolean;
}

const SocialMediaBar: React.FC<Props> = ({ isHome }) => {
  const [alignment, setAlignment] = useState('flex-start');
  const [spacing, setSpacing] = useState({});
  const [columns, setColumns] = useState({});

  const instagramLink = `https://www.instagram.com/${socialsInfo.instagram}`;
  const fbLink = `https://www.facebook.com/${socialsInfo.facebook}`;
  const linkedInLink = `https://www.linkedin.com/in/${socialsInfo.linkedin}/`;

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
          aria-label='linkedin'
          href={linkedInLink}
          sx={{
            color: iconColour,
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default SocialMediaBar;
