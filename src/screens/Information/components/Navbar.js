/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SportIcon from "@mui/icons-material/Sports";
import HelpIcon from "@mui/icons-material/Handshake";
import MoneyIcon from "@mui/icons-material/MoneyOutlined";
import MusicIcon from "@mui/icons-material/MusicNote";
import { Link, Outlet } from "react-router-dom";
import '../OverviewScreenStyle.css'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Sports Events",
      icon: <SportIcon />,
      link: "https://vivum24.pythonanywhere.com/assets/sports_fixtures.pdf",
    },
    {
      text: "Our Cause",
      icon: <HelpIcon />,
      link: "/ourcause",
    },
    {
      text: "Sponsors",
      icon: <MoneyIcon />,
      link: "",
    },
    {
      text: "Cultural Events",
      icon: <MusicIcon />,
      link: "",
    },
  ];
  return (
    <>
      <nav >
        <div className="nav-logo-container">
          <h3>Vivum 2024
          </h3>
        </div>
        <div className="navbar-links-container">
          <Link to="/">Home</Link>
          <a href="https://vivum24.pythonanywhere.com/assets/sports_fixtures.pdf" target="_blank">Sports Events</a>
          <Link to="/ourcause">Our Cause</Link>
          <a href="">Sponsors</a>
          <a href="">Cultural Events</a>
          <a href="">
            {/* <BsCart2 className="navbar-cart-icon" /> */}
          </a>
          <Link to="/auth/login">
            <button className="primary-button">Login</button>
          </Link>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
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
        </Drawer>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
