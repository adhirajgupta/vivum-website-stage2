import React, { useState } from 'react';
import { AppBar, Avatar, Toolbar, Button, Typography, Popover } from '@mui/material';

const DrawerAvatar = ({ handleClick, name }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClick();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button onClick={handleButtonClick}>
        <Toolbar>
          <Avatar src="https://raw.githubusercontent.com/iamshaunjp/material-ui-tut/lesson-17/public/mario-av.png" style={{ marginRight: 13 }} />
          <Typography sx={{ flexGrow: 1 }}>{name}</Typography>
        </Toolbar>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        // PaperProps={{
        //   sx: {
        //     padding: 2,
        //     width: 200, // Adjust the width as needed
        //     height: 100, // Adjust the height as needed
        //   },
        // }}
      >
        <Button onClick={handleLogout}>Logout</Button>
      </Popover>
    </>
  );
};

export default DrawerAvatar;
