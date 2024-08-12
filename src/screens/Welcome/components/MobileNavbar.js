import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link, Outlet } from 'react-router-dom';
import { Accessibility, Help, Login, PersonOffOutlined, Sports, SportsSoccer } from '@mui/icons-material';

export default function PhoneNavbar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ top: open });
  };

  const menuOptions = [
   
    {
      text: 'Our Cause',
      icon: <Accessibility />,
      link: '/ourcause',
    },
    {
      text: 'Login',
      icon: <Login />,
      link: '/auth/login',
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      color={'7b0101'}
    >
      <List>
         <ListItem disablePadding>
              <a href='https://vivum24.pythonanywhere.com/assets/sports_fixtures.pdf' target='_blank'>
            <ListItemButton >
              <ListItemIcon>{<SportsSoccer/>}</ListItemIcon>
              <ListItemText primary={"Sports Fixtures"} />
            </ListItemButton>
              </a>
          </ListItem>
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vivum 2024
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <Outlet />
    </Box>
  );
}
