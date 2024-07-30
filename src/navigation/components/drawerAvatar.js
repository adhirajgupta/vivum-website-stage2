import React from 'react';
import { AppBar, Avatar, Toolbar, Button, Typography } from '@mui/material';

const DrawerAvatar = ({ handleClick }) => {
  return (
    <Toolbar>
        <Avatar src="https://raw.githubusercontent.com/iamshaunjp/material-ui-tut/lesson-17/public/mario-av.png" style={{marginRight:13}} />
      <Typography sx={{ flexGrow: 1 }}>App Bar</Typography>
      <Typography>{"Fetched Data"}</Typography>
      <Button onClick={handleClick}>
      </Button>
    </Toolbar>
  );
};

export default DrawerAvatar;