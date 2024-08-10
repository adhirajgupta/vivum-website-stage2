import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, Outlet } from "react-router-dom";

const classes = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "90px",
    paddingLeft: "1rem",
    backgroundColor: "#480303",
  },
  navbarMenuContainer: {
    display: "none",
  },
  navbarLinksContainer: {
    display: "flex",
    alignItems: "center",
    "& a": {
      marginRight: "2rem",
      textDecoration: "none",
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "600",
      fontFamily: "'Montserrat-Bold'",
    },
  },
  navbarMenuIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "white",
  },
  navbarCartIcon: {
    fontSize: "1.15rem",
    color: "white",
  },
  navLogoContainer: {
    fontFamily: "'Horizon'",
    color: "white",
    fontSize: "2rem",
    paddingLeft: "1rem",
  },
  primaryButton: {
    fontSize: "1.2rem",
  },
  "@media (max-width: 800px)": {
    navLogoContainer: {
      maxWidth: "140px",
    },
    navbarLinksContainer: {
      display: "none",
    },
    navbarMenuContainer: {
      display: "flex",
    },
  },
  "@media (max-width: 1000px)": {
    navbarLinksContainer: {
      "& a": {
        marginRight: "1rem",
        fontSize: "1rem",
      },
    },
    primaryButton: {
      fontSize: "1rem",
    },
    homeBannerImageContainer: {
      maxWidth: "600px",
    },
  },
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <>
      <nav style={classes.nav}>
        <div style={classes.navLogoContainer}>
          <h3>Vivum 2024</h3>
        </div>
        <div style={classes.navbarLinksContainer}>
          <a href="">Sports Events</a>
          <Link to="/ourcause">Our Cause</Link>
          <a href="">Sponsors</a>
          <a href="">Cultural Events</a>
          <a href="">
            {/* <BsCart2 className="navbar-cart-icon" /> */}
          </a>
          <button style={classes.primaryButton}>Login</button>
        </div>
        <div style={classes.navbarMenuContainer}>
          {/* <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={classes.navbarMenuIcon} /> */}
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
                  <ListItemButton>
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
