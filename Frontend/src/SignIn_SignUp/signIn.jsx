import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";
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
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch("http://localhost:3002/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }

      localStorage.setItem("User", JSON.stringify(result));
      // console.log(result);
      // console.log(result[1]);
      // console.log(result[0].UserID);
      // console.log(result[0].isAdmin);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });

      const lastLoginDate = new Date().toISOString();
      localStorage.setItem("lastLoginDate", lastLoginDate);

      const isAdmin = result[0].isAdmin;
      if (isAdmin === true) {
        navigate("/dashboard");
        localStorage.setItem("isAdmin", result[0].isAdmin);
        localStorage.setItem("creationUserID", result[0].UserID);
        localStorage.setItem("CompanyID", result[1][0].CompanyID);
        localStorage.setItem("Companies", JSON.stringify(result[1]));
      } else {
        navigate("/user_dashboard");
      }
    } catch (error) {
      if (!error?.res?.status === 400) {
        alert("Missing Username or Password");
      } else {
        alert(error.message);
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
        navigate("/login");
      }
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
                disabled={loading}
              >
                {t("Login")}
                {/* {loading ? <CircularProgress size={24} /> : `${t("Login")}`} */}
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

// ********************************** */
// import React, { useContext, useEffect, useRef, useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container } from "@mui/material";
// import { AuthContext } from "../Context/authContext.js";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useTranslation } from "react-i18next";
// import Cookies from "js-cookie";
// import useAuth from "../Hooks/useAuth.js";
// import api from "../Context/api.js";

// function Copyright(props) {
//   const navigate = useNavigate();
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link
//         color="inherit"
//         sx={{ cursor: "pointer" }}
//         onClick={() => navigate("/home")}
//       >
//         QmmaTech
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();
// export default function SignIn() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const { setAuth } = useAuth();

//   const navigate = useNavigate();
//   const location = useLocation();
//   // const from = location.state?.from?.pathname || "/";

//   const userRef = useRef();
//   const errRef = useRef();

//   const [UserName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [UserName, password]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post(
//         "/api/user/login",
//         JSON.stringify({ UserName, password }),
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Credentials: "include",
//           },
//         }
//       );

//       const result = JSON.stringify(response?.data);
//       console.log(result);
//       const res = await res.json();
//       console.log(res);
//       const accessToken = response?.data?.accessToken;
//       // const roles = response?.data?.roles;
//       setAuth({ UserName, password, accessToken });
//       setUserName("");
//       setPassword("");

//       alert("Welcome to Your Account");
//       navigate("/dashboard");

//       localStorage.setItem("isAdmin", res[0].isAdmin);
//       localStorage.setItem("creationUserID", res[0].UserID);
//       localStorage.setItem("CompanyID", res[1][0].CompanyID);
//       localStorage.setItem("Companies", JSON.stringify(result[1]));
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//         navigate("/login");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Missing Username or Password");
//         navigate("/login");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Unauthorized");
//         navigate("/");
//       } else {
//         setErrMsg("Login Failed");
//         navigate("/login");
//       }
//       errRef.current.focus();
//     }
//   };

//   // Language
//   const { t } = useTranslation();
//   const languages = [
//     {
//       lang: "Arabic",
//       code: "ar",
//       dir: "rtl",
//     },
//     {
//       lang: "English",
//       code: "en",
//     },
//   ];

//   const currentLanguageCode = Cookies.get("i18next") || "en";
//   const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

//   useEffect(() => {
//     document.body.dir = currentLanguage.dir || "ltr";
//     document.title = t("Title");
//   }, [currentLanguage, t]);
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid
//         container
//         component="main"
//         sx={{
//           height: "100vh",
//           // height: "100% auto",
//           backgroundImage:
//             "url(https://media.istockphoto.com/id/1478407211/photo/woman-using-computer-chatting-with-an-intelligent-artificial-intelligence-asks-for-the.jpg?s=612x612&w=0&k=20&c=xlxwKSoc_MSf27VZJKlyhM2sXuEBhvORdJHRULr8Esg=)",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <CssBaseline />
//         <Container
//           component="main"
//           maxWidth="sm"
//           sx={{
//             border: "1px solid #fff",
//             boxShadow: "0 0 10px #eee",
//             borderRadius: "10px",
//             height: "600px",
//             background: "#fff",
//             margin: "50px auto",
//           }}
//         >
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, background: "#d1a981", color: "#fff" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               {t("Login")}
//             </Typography>
//             <Box
//               component="form"
//               validate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="UserName"
//                 label={t("UserName")}
//                 name="UserName"
//                 autoComplete="UserName"
//                 autoFocus
//                 ref={userRef}
//                 onChange={(e) => setUserName(e.target.value)}
//                 value={UserName}
//               />
//               <TextField
//                 margin="normal"
//                 // required
//                 fullWidth
//                 name="password"
//                 label={t("Password")}
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//               {/* <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               /> */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 3,
//                   mb: 2,
//                   fontWeight: "bold",
//                   background: "#d1a981",
//                   color: "#fff",
//                 }}
//               >
//                 {t("Login")}
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2" onClick={handleClickOpen}>
//                     {t("Forgot Password?")}
//                   </Link>
//                 </Grid>

//                 <Dialog
//                   open={open}
//                   onClose={handleClose}
//                   fullWidth
//                   sx={{ margin: "50px auto" }}
//                 >
//                   <DialogTitle>{t("Forgot Password?")}</DialogTitle>
//                   <DialogContent>
//                     <DialogContentText>
//                       {t("Enter your Email")}
//                     </DialogContentText>
//                     <TextField
//                       autoFocus
//                       margin="dense"
//                       id="name"
//                       label={t("Email")}
//                       type="email"
//                       fullWidth
//                       variant="standard"
//                     />
//                   </DialogContent>
//                   <DialogActions>
//                     <Button onClick={handleClose}>{t("Cancel")}</Button>
//                     <Button onClick={handleClose}>{t("Send")}</Button>
//                   </DialogActions>
//                 </Dialog>
//               </Grid>
//             </Box>
//           </Box>
//           <Copyright sx={{ mt: 5 }} />

//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//         </Container>
//       </Grid>
//     </ThemeProvider>
//   );
// }
