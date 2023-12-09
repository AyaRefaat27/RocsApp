import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function CompanyDetails({ info }) {
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

  // Get Compnay From DB
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const companyID = info.CompanyID;
  useEffect(() => {
    fetchUser();
  }, [companyID]);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/company/1?companyID=${companyID}`
      );
      const data = await response.json();
      if (response.ok) {
        setCompany(data);
      } else {
        console.error("Error fetching compnay:", data.message);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching compnay:", error);
      setLoading(false);
    }
  };

  // State to manage form values
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const updateCompnay = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3002/api/user?userID=${userID}`, // Replace with your update user API endpoint
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formValues),
  //       }
  //     );
  //     const data = await response.json();
  //     if (response.ok) {
  //       console.log("Compnay data updated successfully:", data);
  //       // You can update the user state here to reflect the changes in UI
  //     } else {
  //       console.error("Error updating compnay:", data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error updating compnay:", error);
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography gutterBottom variant="h4" component="h4">
          Hello {info.NameEnglish}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          company && (
            <>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    minWidth: 900,
                    width: "100%",
                  },
                }}
                // onSubmit={updateCompnay}
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
                      value={formValues.NameEnglish || company.NameEnglish}
                      onChange={handleInputChange}
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
                      value={formValues.NameArabic || company.NameArabic}
                      onChange={handleInputChange}
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
                      value={formValues.Phone || company.Phone}
                      onChange={handleInputChange}
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
                      value={formValues.Mail || company.Mail}
                      onChange={handleInputChange}
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
                      value={formValues.Country || company.Country}
                      onChange={handleInputChange}
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
                      value={formValues.City || company.City}
                      onChange={handleInputChange}
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
                  <Button
                    variant="outlined"
                    type="submit"
                    // onClick={updateCompnay}
                  >
                    {t("Save")}
                  </Button>
                </Box>
              </Box>
            </>
          )
        )}
      </Box>
    </>
  );
}
