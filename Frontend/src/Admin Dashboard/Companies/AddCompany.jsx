import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import styled from "@emotion/styled";

export default function AddCompany() {
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

  // Add Company

  const [addCompany, setAddCompany] = useState({
    CreatedByUserID: Number(localStorage.getItem("creationUserID")),
    NameArabic: "",
    NameEnglish: "",
    Mail: "",
    Phone: "",
  });

  const handleChange = (e) => {
    setAddCompany((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/company", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(addCompany),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert("Company Created Successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {t("Add Company")}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              minWidth: 900,
              width: "100%",
            },
          }}
          onSubmit={handleChange}
        >
          <Grid container spacing={3} sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                id="NameEnglish"
                name="NameEnglish"
                label={`${t("Company English Name")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                id="NameArabic"
                name="NameArabic"
                label={`${t("Company Arabic Name")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="phone"
                id="Phone"
                name="Phone"
                label={`${t("Phone")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                id="Mail"
                name="Mail"
                label={`${t("Mail")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="country"
                id="Country"
                name="Country"
                label={`${t("Country")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="city"
                id="City"
                name="City"
                label={`${t("City")}`}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              //   width: "500px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outlined" type="submit" onClick={handleClick}>
              {t("Save")}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
