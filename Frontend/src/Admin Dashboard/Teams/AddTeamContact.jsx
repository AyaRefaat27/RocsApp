import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SelectContact from "./selectContact";

export default function AddTeamContact() {
  const [users, setUsers] = useState("");

  const handleChange = (event) => {
    setUsers(event.target.value);
  };
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Add Contact
      </Typography>

      <Box component="form" Validate sx={{ width: "50%", margin: "50px auto" }}>
        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-label">System Users</InputLabel>
              <Select
                value={users}
                onChange={handleChange}
                displayEmpty
                labelId="demo-label"
              >
                <MenuItem value="aya">Aya</MenuItem>
                <MenuItem value="eman">Eman</MenuItem>
                <MenuItem value="ahmed">Ahmed</MenuItem>
                <MenuItem value="mohamed">Mohamed</MenuItem>
                <MenuItem value="hossam">Hossam</MenuItem>
                <MenuItem value="hassan">Hassan</MenuItem>
                <MenuItem value="asmaa">Asmaa</MenuItem>
                <MenuItem value="shimaa">Shimaa</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <SelectContact />
          </Grid>
        </Grid>
      </Box>

      <Button size="medium" color="primary" type="submit">
        Save Changes
      </Button>
    </>
  );
}
