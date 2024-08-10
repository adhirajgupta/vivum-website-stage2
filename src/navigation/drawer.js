import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, List } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DrawerItem from './components/drawerItem';
import DrawerAvatar from './components/drawerAvatar';
import { Password } from '@mui/icons-material';

const drawerWidth = 240;

const ResponsiveDrawer = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [coachName, setCoachName] = useState('');
  const pathName = useLocation();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  const checkSessionAndFetch = async () => {
    const storedName = localStorage.getItem('coachName');
    if (storedName && storedName !== "undefined undefined") {
      const utoken = localStorage.getItem('utoken');
      if (utoken) {
        try {
          const response = await fetch(`https://vivum24.pythonanywhere.com/userdata?utoken=${utoken}`);
          const data = await response.json();
          const fullName = `${data.userdata.fname} ${data.userdata.lname}`;
          setCoachName(fullName);
          localStorage.setItem('coachName', fullName);
          // navigate('/portal/dashboard');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/auth/login');
      }
    } else {
      setCoachName(storedName);
    }
  };

  useEffect(() => {
    console.log(pathName.pathname, "- pathname")
    if (pathName.pathname.endsWith('/portal/') && pathName.pathname !== '/portal/dashboard') {
      navigate('/portal/dashboard');
    } else {
      checkSessionAndFetch();
    }
  }, []);

  const drawer = (
    <div>
      <DrawerAvatar name={coachName} handleClick={handleLogout} />
      <Divider />
      <List>
        <DrawerItem text="Dashboard" to="/portal/dashboard" icon={<InboxIcon />} />
        <DrawerItem text="Events" to="/portal/events" icon={<MailIcon />} />
        <DrawerItem text="ChangePassword" to="/portal/changepassword" icon={<Password />} />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#7b0101',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={() => navigate('/')} color="secondary">
            <Typography variant="h6" noWrap>
              Vivum 2024
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
