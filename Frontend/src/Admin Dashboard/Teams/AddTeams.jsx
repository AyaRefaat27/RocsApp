// import React, { useEffect } from "react";
// import Box from "@mui/material/Box";
// import UploadPhoto from "../Users/UploadPhoto";
// import { useTranslation } from "react-i18next";
// import Cookies from "js-cookie";
// import TeamDetails from "./TeamDetails";

// export default function AddTeams() {
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
//     <Box
//       sx={{
//         flexGrow: 1,
//         margin: "20px",
//         display: "flex",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         flexDirection: "row",
//         flexWrap: "wrap",
//         gap: 3,
//         width: "100%",
//       }}
//     >
//       {/* <Box sx={{ width: "350px" }}>
//         <UploadPhoto />
//       </Box> */}
//       <Box sx={{ width: "80%", margin: "50px auto" }}>
//         <TeamDetails />
//       </Box>
//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AddTeams() {
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

  // Fetch Data from DB
  const navigate = useNavigate();
  const [addTeam, setAddTeam] = useState({
    CreationUserID: Number(localStorage.getItem("creationUserID")),
    CompanyID: Number(localStorage.getItem("selectedCompanyId")),
    TeamName: "",
    TeamMail: "",
  });

  const handleChange = (e) => {
    setAddTeam((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/team", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(addTeam),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert("Team Created Successfully");
      navigate("/teams");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        height: "100% auto",
      }}
    >
      <Typography gutterBottom variant="h4" component="div">
        Add Team
      </Typography>

      <Box
        component="form"
        Validate
        sx={{ mt: 3, mb: 3 }}
        onSubmit={handleClick}
      >
        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              id="TeamName"
              name="TeamName"
              label="Team Name"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-email"
              name="email"
              id="TeamMail"
              label="Team Mail"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Button
        size="medium"
        color="primary"
        type="submit"
        varient="contained"
        onClick={handleClick}
      >
        Create Team
      </Button>
    </Box>
  );
}
