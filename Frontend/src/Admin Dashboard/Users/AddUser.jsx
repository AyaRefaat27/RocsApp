import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Button } from "@mui/material";

import { Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
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

  const navigate = useNavigate();

  const [addUser, setAddUser] = useState({
    creationUserID: Number(localStorage.getItem("creationUserID")),
    CompanyID: Number(localStorage.getItem("CompanyID")),
    NameArabic: "",
    NameEnglish: "",
    UserPassword: "",
    UserName: "",
    UserMail: "",
    UserPhone: "",
  });

  const handleChange = (e) => {
    setAddUser((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(addUser),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert("User Created Successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
      }}
    >
      {/* Photo */}
      {/* <Box sx={{ width: "300px" }}>
        <Card sx={{ borderRadius: "25px", boxShadow: "0px 0px 10px #ddd" }}>
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              sx={{ height: "100% auto" }}
              component="img"
              image="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
            />
          </CardActionArea>
          <CardActions>
            <Button
              size="medium"
              color="primary"
              sx={{ textAlign: "center" }}
              fullWidth
            >
              Upload Profile Photo
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                // onChange={handlePhotoChange}
              />
            </Button>
          </CardActions>
        </Card>
      </Box> */}

      {/* User Data */}
      <Box sx={{ width: "90%" }}>
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {t("Add User")}
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
                  id="NameEnglish"
                  name="NameEnglish"
                  label={t("Full Name in English")}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="NameArabic"
                  id="NameArabic"
                  label={t("Full Name in Arabic")}
                  dir="rtl"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Username & Email */}
            <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-email"
                  id="UserMail"
                  name="UserEmail"
                  label={t("Email")}
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-username"
                  name="UserName"
                  id="UserName"
                  label={t("UserName")}
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Password & Phone Number*/}
            <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-password"
                  id="UserPassword"
                  name="UserPassword"
                  label={t("Password")}
                  type="password"
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="phone"
                  id="UserPhone"
                  name="UserPhone"
                  label={t("Phone")}
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Position & Company */}
            {/* <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Company</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={company}
                    // value={CompanyID}
                    label="Company"
                    onChange={handleChange}
                    fullWidth
                  >
                    {companies.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid> */}
          </Box>

          <Button
            size="medium"
            color="primary"
            type="submit"
            onClick={handleClick}
          >
            {t("Save")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
