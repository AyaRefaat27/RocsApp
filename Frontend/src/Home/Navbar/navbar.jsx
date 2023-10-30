import styled from "@emotion/styled";
import {
  Call,
  ContactPage,
  EmailRounded,
  Home,
  MenuRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext.js";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const theme = createTheme();
  const NavLink = styled(Typography)(() => ({
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    // "&:hover": {
    //   color: "#333",
    // },
  }));

  const NavBarLinkBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuRounded)(() => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(() => ({
    cursor: "pointer",
    width: "150px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Call Us", "Contact-Us", "Email-Us"].map((text, index) => {
          return (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <Home />}
                    {index === 1 && <Call />}
                    {index === 2 && <ContactPage />}
                    {index === 3 && <EmailRounded />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <NavbarContainer sx={{ position: "static" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <Box>
            <NavbarLogo src="./assets/images/logo1.png" />
            <CustomMenuIcon onClick={toggleDrawer("right", true)} />
            <Drawer
              anchor="right"
              open={mobileMenu["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </Box>

          <NavBarLinkBox>
            <NavLink
              variant="body2"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {" "}
              <Home sx={{ fontSize: "22px" }} /> Home{" "}
            </NavLink>
            <NavLink
              variant="body2"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {" "}
              <Call sx={{ fontSize: "22px" }} /> Call Us
            </NavLink>
            <NavLink
              variant="body2"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {" "}
              <ContactPage sx={{ fontSize: "22px" }} /> Contact-Us
            </NavLink>
            <NavLink
              variant="body2"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                gap: "0.2rem",
              }}
            >
              {" "}
              <EmailRounded sx={{ fontSize: "22px" }} /> Email-Us
            </NavLink>
          </NavBarLinkBox>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {user ? (
            <>
              <Chip
                avatar={<Avatar alt="Natacha" src="images/avatar/1.jpg" />}
                label={user.username}
                sx={{ color: "#333", background: "#fff" }}
                variant="contained"
              />
              <Button
                variant="contained"
                color="success"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </NavbarContainer>
    </>
  );
}
export default Navbar;
