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

export default function TeamInfo({ info }) {
  // Language
  const { t } = useTranslation();

  // Get Compnay From DB
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const teamID = info.TeamID;
  useEffect(() => {
    fetchUser();
  }, [teamID]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:3002/api/team/${teamID}`);
      const data = await response.json();
      if (response.ok) {
        setTeam(data);
      } else {
        console.error("Error fetching team:", data.message);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching team:", error);
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
          Hello {info.TeamName}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          team && (
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
                      id="TeamName"
                      name="TeamName"
                      label={`${t("TeamName")}`}
                      variant="outlined"
                      fullWidth
                      value={formValues.TeamName || team.TeamName}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="teamid"
                      id="ParentTeamID"
                      name="ParentTeamID"
                      label={`${t("ParentTeamID")}`}
                      variant="outlined"
                      fullWidth
                      value={formValues.ParentTeamID || team.ParentTeamID}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="phone"
                      id="CompanyID"
                      name="CompanyID"
                      label={`${t("CompanyID")}`}
                      variant="outlined"
                      fullWidth
                      value={formValues.CompanyID || team.CompanyID}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="email"
                      id="TeamMail"
                      name="Team Mail"
                      label={`${t("Team Mail")}`}
                      variant="outlined"
                      fullWidth
                      value={formValues.TeamMail || team.TeamMail}
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
