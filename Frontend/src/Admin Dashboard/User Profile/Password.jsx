import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function Password() {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Change Your Password
      </Typography>

      <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-password"
              id="password"
              name="password"
              label="New Password"
              type="password"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              autoComplete="given-password"
              id="password"
              name="password"
              label="Retype Password"
              type="password"
              required
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Button size="medium" color="primary" type="submit">
        Save Changes
      </Button>
    </>
  );
}
