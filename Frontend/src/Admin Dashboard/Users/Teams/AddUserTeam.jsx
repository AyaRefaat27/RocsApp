import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function AddUserTeam({ addUser }) {
  const [teams, setTeams] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Fetch teams from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/team");
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Fetch roles from the database
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch("https://your-api-endpoint/roles");
        const data = await response.json();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  // Save Data to Backend
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/userTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedTeam, selectedRole }),
      });
      const result = await response.json();
      if (!response.ok) {
        return alert(result.message);
      }
      alert("User Added Successfully.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Add User
      </Typography>

      <Box
        component="form"
        Validate
        sx={{ width: "800px" }}
        onSubmit={handleSaveChanges}
      >
        <Box>
          <Grid container spacing={3} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Teams List</InputLabel>
                <Select value={selectedTeam} onChange={handleTeamChange}>
                  {teams.map((team) => (
                    <MenuItem key={team.TeamID} value={team.TeamID}>
                      {team.TeamName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Roles List</InputLabel>
                <Select value={selectedRole} onChange={handleRoleChange}>
                  {roles.map((role) => (
                    <MenuItem key={role.roleID} value={role.roleID}>
                      {role.roleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Button
          size="medium"
          color="primary"
          type="submit"
          variant="contained"
          sx={{ mb: 2, mt: 2 }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
}
