import React, { useContext, useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { resolvePath, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import axios from "axios";
import api from "../Context/api.js";
import { AuthContext } from "../Context/authContext.js";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

function Copyright(props) {
  const navigate = useNavigate();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        QmmaTech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
export default function SignIn() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    UserName: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch("http://localhost:3002/api/user/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      }
      // console.log(result.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
      alert("Welcome to Your Account");
      console.log(result);
      localStorage.setItem("creationUserID", result.UserID);
      localStorage.setItem("CompanyID", result.CompanyID);
    } catch (error) {
      if (!error?.res?.status === 400) {
        alert("Missing Username or Password");
      } else {
        alert("Login Failed");
      }
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      navigate("/login");
    }
  };

  // Language
  const { t } = useTranslation();
  const languages = [
    {
      lang: "Arabic",
      code: "ar",
      dir: "rtl",
    },
    {
      lang: "English",
      code: "en",
    },
  ];

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Title");
  }, [currentLanguage, t]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          // height: "100% auto",
          backgroundImage:
            "url(https://media.istockphoto.com/id/1478407211/photo/woman-using-computer-chatting-with-an-intelligent-artificial-intelligence-asks-for-the.jpg?s=612x612&w=0&k=20&c=xlxwKSoc_MSf27VZJKlyhM2sXuEBhvORdJHRULr8Esg=)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            border: "1px solid #fff",
            boxShadow: "0 0 10px #eee",
            borderRadius: "10px",
            height: "600px",
            background: "#fff",
            margin: "50px auto",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, background: "#d1a981", color: "#fff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("Login")}
            </Typography>
            <Box
              component="form"
              validate
              onSubmit={handleClick}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="UserName"
                label={t("UserName")}
                name="UserName"
                autoComplete="UserName"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                // required
                fullWidth
                name="password"
                label={t("Password")}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: "bold",
                  background: "#d1a981",
                  color: "#fff",
                }}
              >
                {t("Login")}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" onClick={handleClickOpen}>
                    {t("Forgot Password?")}
                  </Link>
                </Grid>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  fullWidth
                  sx={{ margin: "50px auto" }}
                >
                  <DialogTitle>{t("Forgot Password?")}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {t("Enter your Email")}
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label={t("Email")}
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>{t("Cancel")}</Button>
                    <Button onClick={handleClose}>{t("Send")}</Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
