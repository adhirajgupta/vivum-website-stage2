// DrawerItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const DrawerItem = ({ text, to, icon, onClick }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: '#7b0101' }}>
      <ListItem disablePadding >
        <ListItemButton onClick={onClick}  >
          <ListItemIcon style={{color:'#7b0101'}} >{icon}</ListItemIcon>
          <ListItemText primary={text}  />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default DrawerItem;