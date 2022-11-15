import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/styles";
import Image from "next/image";

import Layout from "../../layout/layout";

const drawerWidth = 240;
const navItems = ["Home", "cars", "About", "booking", "cars", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [background, setBackground] = useState('rgba(0, 0, 0, 0.3)')
  const [top, setTop] = useState(44);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll); 
    return () => document?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (global.window.scrollY == 0) {
      setTop(44)
      setBackground('rgba(0, 0, 0, 0.3)')
    }else{
        setTop(0)
        setBackground('rgba(0, 0, 0, 1)')
    }
  };
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src={require("../../assets/logo.png")} alt="logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center", textTransform: 'capitalize' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{ background: background, top: {xs: 0,sm: `${top}px`} }}
      >
        <Layout>
          <Toolbar sx={{padding: '0 !important'}}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { md: "block" } }}
            >
              <Image
                src={require("../../assets/logo.png")}
                alt="logo"
                width={172}
                height={24}
              />
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: "#FFF" }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, i) => (
                <Button key={i} sx={{ color: "#fff", textTransform: 'capitalize' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Layout>
      </AppBar>
      <Box component="nav">
        <Layout>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Layout>
      </Box>
      <Box component="main">
        <Layout>
          <Toolbar />
        </Layout>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
