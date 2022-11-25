import React, { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/styles";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../layout/layout";

const drawerWidth = 240;
const navItems = ["Home", "cars", "About", "booking", "blog"];

function Navbar(props) {
  const { window } = props;
  const router = useRouter();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [background, setBackground] = useState("rgba(0, 0, 0, 0.3)");
  const [top, setTop] = useState(44);
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (global.window.scrollY == 0) {
      setTop(44);
      setBackground("rgba(0, 0, 0, 0.3)");
    } else {
      setTop(0);
      setBackground("rgba(0, 0, 0, 1)");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navStyle = {
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  };
  const navActiveStyle = {
    color: theme.palette.primary.main,
    textTransform: "capitalize",
  };
  //profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout
  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src={require("../../assets/logo.png")} alt="logo" priority={true}/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={navStyle}>
              <ListItemText primary={item} sx={{ color: "#000" }} />
            </ListItemButton>
          </ListItem>
        ))}
        <MenuItem>
          <Avatar sx={{ height: "30px", width: "30px", marginRight: "5px" }} />{" "}
          <Link
            href="/profile"
            style={{ color: "#444" }}
            onClick={() => setActive(5)}
          >
            Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Link href="/setting" style={{ color: "#444" }} onClick={() => setActive(5)}>
            Settings
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{ background: background, top: { xs: 0, sm: `${top}px` } }}
      >
        <Layout>
          <Toolbar sx={{ padding: "0 !important" }}>
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
                <Button
                  key={i}
                  sx={active == i ? navActiveStyle : navStyle}
                  active={active}
                  onClick={() => setActive(i)}
                >
                  {item}
                </Button>
              ))}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  right: 102,
                  left: "auto !important",
                  top: "90px !important",
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar />{" "}
                <Link
                  href="/profile"
                  style={{ color: "#444" }}
                  onClick={() => setActive(5)}
                >
                  Profile
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <Link href="/setting" style={{ color: "#444" }} onClick={() => setActive(5)}>
                  Settings
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
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
