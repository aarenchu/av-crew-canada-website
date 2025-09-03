import {
  Avatar,
  Box,
  Grid,
  Popover,
  SvgIconProps,
  Typography,
} from '@mui/material';
import React from 'react';

interface Props {
  RentalIcon: React.ComponentType<SvgIconProps>;
  name: string;
  color: string;
  caption: string;
}

const RentalItem: React.FC<Props> = ({ RentalIcon, name, color, caption }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const iconColor = (bgColor: string) => {
    switch (bgColor) {
      case 'primary.main':
        return 'primary.contrastText';
      case 'primary.contrastText':
        return 'background.paper';
      default:
        return 'secondary.main';
    }
  };

  return (
    <Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexDirection: 'column',
        }}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Avatar sx={{ bgcolor: color, width: 85, height: 85 }}>
          <RentalIcon
            sx={{
              color: iconColor(color),
              fontSize: 60,
            }}
          />
        </Avatar>
        <Typography variant='body1' maxWidth='96px'>
          {name}
        </Typography>
      </Box>
      <Popover
        id='mouse-over-popover'
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{caption}</Typography>
      </Popover>
    </Grid>
  );
};

export default RentalItem;
