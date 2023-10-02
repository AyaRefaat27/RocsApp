import { PasswordRounded } from "@mui/icons-material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const defaultTheme = createTheme();
export default function Password() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100% auto",
            margin: "50px auto",
          }}
        >
          <CssBaseline />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
                }}
              >
                <PasswordRounded />
              </Avatar>
              <Typography component="h1" variant="h5">
                Change Your Password
              </Typography>
              <Box component="form" validate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Current Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Rewrite New Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  size="large"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
                    color: "#fff",
                    fontWeight: "bold",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
      </ThemeProvider>
    </>
  );
}
