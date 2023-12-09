// import React, { useState } from "react";
// import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Chip from "@mui/material/Chip";
// import EditUser from "./EditUser";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const teams = [
//   "Marketing Team",
//   "Social Media Team",
//   "Analysis Team",
//   "E-Commerce Team",
//   "Customer Services Team",
//   "Technical Team",
//   "IT Team",
// ];

// const contacts = ["Ahmed", "Mohamed", "Hassan", "Omar", "Ali", "Ibrahiem"];

// const languages = ["Arabic", "English"];

// function getLanguageStyles(name, language, theme) {
//   return {
//     fontWeight:
//       language.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function getTeamStyles(name, team, theme) {
//   return {
//     fontWeight:
//       team.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function getContactStyles(name, contact, theme) {
//   return {
//     fontWeight:
//       contact.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function BasicInfoCard() {
//   const theme = useTheme();
//   const [language, setLanguage] = useState("");
//   const [team, setTeam] = useState([]);
//   const [contact, setContact] = useState([]);

//   const handleLanguageChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setLanguage(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const handleTeamChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setTeam(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const handleContactChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setContact(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleDialogOpen = () => {
//     setDialogOpen(true);
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <Box>
//       <Typography gutterBottom variant="h4" component="div">
//         Your Info
//       </Typography>

//       <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
//         {/* Name */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-name"
//               id="english_name"
//               name="english_name"
//               label="Full Name in English"
//               defaultValue="Mohamed Hassan Ahmed"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-name"
//               name="arabic_name"
//               id="arabic_name"
//               label="Full Name in Arabic"
//               defaultValue="محمد حسن أحمد"
//               dir="rtl"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Username & Email */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-email"
//               id="email"
//               name="email"
//               label="Email"
//               defaultValue="mohamed200@gmail.com"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-username"
//               name="username"
//               id="username"
//               label="Username"
//               defaultValue="mohamed20"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Position & Language */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-position"
//               id="position"
//               name="position"
//               label="Position"
//               defaultValue="CEO Manager"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-multiple-checkbox-label">
//                 Language
//               </InputLabel>
//               <Select
//                 labelId="demo-multiple-checkbox-label"
//                 id="demo-multiple-checkbox"
//                 value={language}
//                 onChange={handleLanguageChange}
//                 input={<OutlinedInput label="Language" />}
//                 renderValue={(selected) => selected.join(", ")}
//                 MenuProps={MenuProps}
//               >
//                 {languages.map((name) => (
//                   <MenuItem
//                     key={name}
//                     value={name}
//                     style={getLanguageStyles(name, language, theme)}
//                   >
//                     {name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         {/* Location , Country & Company */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="company"
//               id="company"
//               name="company"
//               label="Company"
//               defaultValue="El-Araby Group"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="country"
//               id="country"
//               name="country"
//               label="Country"
//               defaultValue="Egypt"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sx={{ mt: 2 }}>
//             <TextField
//               autoComplete="address"
//               name="address"
//               id="address"
//               label="Location"
//               defaultValue="Cairo-Egypt"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Phone & Postal Code */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="phone"
//               id="phone"
//               name="phone"
//               label="Phone Number"
//               defaultValue="+020103433629"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="post-code"
//               name="post_code"
//               id="post_code"
//               label="Postal Code"
//               defaultValue="437158"
//               required
//               fullWidth
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Teams & Contacts */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-multiple-chip-label">Teams</InputLabel>
//               <Select
//                 labelId="demo-multiple-chip-label"
//                 id="demo-multiple-chip"
//                 multiple
//                 fullWidth
//                 value={team}
//                 onChange={handleTeamChange}
//                 defaultValue={"Marketing Team"}
//                 input={
//                   <OutlinedInput id="select-multiple-chip" label="Teams" />
//                 }
//                 renderValue={(selected) => (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                     {selected.map((value) => (
//                       <Chip key={value} label={value} />
//                     ))}
//                   </Box>
//                 )}
//                 MenuProps={MenuProps}
//               >
//                 {teams.map((name) => (
//                   <MenuItem
//                     key={name}
//                     value={name}
//                     style={getTeamStyles(name, team, theme)}
//                   >
//                     {name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-multiple-chip-label">Contacts</InputLabel>
//               <Select
//                 labelId="demo-multiple-chip-label"
//                 id="demo-multiple-chip"
//                 multiple
//                 fullWidth
//                 value={contact}
//                 onChange={handleContactChange}
//                 defaultValue={"Marketing Team"}
//                 input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//                 renderValue={(selected) => (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                     {selected.map((value) => (
//                       <Chip key={value} label={value} />
//                     ))}
//                   </Box>
//                 )}
//                 MenuProps={MenuProps}
//               >
//                 {contacts.map((name) => (
//                   <MenuItem
//                     key={name}
//                     value={name}
//                     style={getContactStyles(name, contact, theme)}
//                   >
//                     {name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Box>

//       <Button size="medium" color="primary" onClick={handleDialogOpen}>
//         Edit Profile
//       </Button>

//       <EditUser open={dialogOpen} onClose={handleDialogClose} />
//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditUser from "./EditUser";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = ["Arabic", "English"];

function getLanguageStyles(name, language, theme) {
  return {
    fontWeight:
      language.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BasicInfoCard() {
  const theme = useTheme();
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Get User From DB
  const [userData, setUserData] = useState({
    NameEnglish: "",
    NameArabic: "",
    UserMail: "",
    UserName: "",
    CompanyID: "",
    UserPhone: "",
  });
  const storedData = localStorage.getItem("User");
  const userInfo = JSON.parse(storedData);
  const userID = userInfo[0].UserID;
  // console.log(userInfo);
  // console.log(userID);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/user/1?userID=${userID}`
      );
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/user?userID=${userID}`, // Replace with your update user API endpoint
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        console.log("User data updated successfully");
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userID]);

  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div">
        Your Info
      </Typography>

      <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
        <Box>
          {/* Name */}
          <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                id="NameEnglish"
                name="NameEnglish"
                label="Full Name in English"
                fullWidth
                value={userData.NameEnglish}
                onChange={(e) =>
                  setUserData({ ...userData, NameEnglish: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="NameArabic"
                id="NameArabic"
                label="Full Name in Arabic"
                dir="rtl"
                fullWidth
                value={userData.NameArabic}
                onChange={(e) =>
                  setUserData({ ...userData, NameArabic: e.target.value })
                }
              />
            </Grid>
          </Grid>

          {/* Username & Email */}
          <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-email"
                id="UserMail"
                name="UserMail"
                label="Email"
                fullWidth
                value={userData.UserMail}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-username"
                name="UserName"
                id="UserName"
                label="Username"
                fullWidth
                value={userData.UserName}
                onChange={(e) =>
                  setUserData({ ...userData, UserName: e.target.value })
                }
              />
            </Grid>
          </Grid>

          {/* Position & Language */}
          <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="company"
                id="company"
                name="company"
                label="CompanyID"
                fullWidth
                value={userData.CompanyID}
                onChange={(e) =>
                  setUserData({ ...userData, CompanyID: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  value={language}
                  onChange={handleLanguageChange}
                  input={<OutlinedInput label="Language" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {languages.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getLanguageStyles(name, language, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Phone & Postal Code */}
          <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="phone"
                id="UserPhone"
                name="UserPhone"
                label="Phone Number"
                fullWidth
                value={userData.UserPhone}
                onChange={(e) =>
                  setUserData({ ...userData, UserPhone: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Button size="medium" color="primary" onClick={updateUser}>
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
