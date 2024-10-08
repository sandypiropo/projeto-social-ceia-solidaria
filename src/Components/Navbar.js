/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
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
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Logo from "../../src/Assets/logo.PNG";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Início",
      icon: <HomeIcon />,
      href: "#home",
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      href: "#about",
    },
    {
      text: "Ajude",
      icon: <FaHandHoldingHeart />,
      href: "#howtohelp",
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      href: "#contact",
    },
  ];

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToHelp = (event) => {
    event.preventDefault();
    const element = document.getElementById("help");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      <div id="navbar" className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a href={item.href} key={item.text} onClick={(e) => handleScroll(e, item.href.slice(1))}>
            {item.text}
          </a>
        ))}
        <button className="primary-button" onClick={scrollToHelp}>
          Seja voluntário <FaHandHoldingHeart className="navbar-heart-icon" />
        </button>
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
                <ListItemButton component="a" href={item.href} onClick={(e) => handleScroll(e, item.href.slice(1))}>
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
  );
};

export default Navbar;
