import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import DrawerItem from './components/drawerItem';
import DrawerAvatar from './components/drawerAvatar';
import { Button } from '@mui/material';

const drawerWidth = 240;
const appBarHeight = 64; // Default height of AppBar

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [coachName, setCoachName] = React.useState('')
  const pathName = useLocation()
  const navigate = useNavigate()
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



  async function checkSessionAndFetch() {
    if ((localStorage.getItem('coachName') && localStorage.getItem("coachName") != "undefined undefined")) {
      const utoken = localStorage.getItem('utoken');
      if (utoken) {
        try {
          const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
          const data = await response.json();
          console.log("data - ", data);

          const fullName = data.userdata.fname + " " + data.userdata.lname;
          setCoachName(fullName);
          localStorage.setItem("coachName", fullName);
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      } else {
        console.log('No utoken found in localStorage');
      }
    } else {
      console.log("session storage data exectued")
      setCoachName(localStorage.getItem('coachName'))
    }
  }

  React.useEffect(() => {
    console.log(pathName)
    if (pathName.pathname == "/") {
      navigate("/dashboard")
    } else {
      checkSessionAndFetch()
    }
  }, [])

  const handleLogout = () => {
    // Clear utoken from localStorage and localStorage
    localStorage.removeItem('utoken');
    localStorage.removeItem('coachName');
    localStorage.removeItem('school')

    // Navigate to the login page
    navigate('/auth/login');
  };


  const drawer = (
    <div>
      <DrawerAvatar name={coachName} handleClick={handleLogout} />
      <Divider />
      <List>
        <DrawerItem
          text="Dashboard"
          to="/dashboard"
          icon={<InboxIcon />}
          onClick={() => console.log('Dashboard Pressed')}
        />
        <DrawerItem
          text="Events"
          to="/events"
          icon={<MailIcon />}
          onClick={() => console.log('Events Pressed')}
        />
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#7b0101'
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
          <Button onClick={() =>navigate('/information/overview')} color='secondary'>
            <Typography variant="h6" noWrap component="div">
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          }}
        >

          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;