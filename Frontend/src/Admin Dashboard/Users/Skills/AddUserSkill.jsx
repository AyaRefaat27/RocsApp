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
  TextField,
  Typography,
} from "@mui/material";

export default function AddUserSkill({ addSkill }) {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");

  const [addSkills, setAddSkill] = useState({
    CreationUserID: Number(localStorage.getItem("creationUserID")),
    CompanyID: Number(localStorage.getItem("selectedCompanyId")),
    UserID: addSkill.UserID,
    skillLevel: Number(),
    Description: "",
  });

  // Fetch skills from the database
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/skill");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleSkillChange = (event) => {
    const selectedId = event.target.value;
    setSelectedSkill(selectedId);
    setAddSkill((previous) => ({
      ...previous,
      skillID: selectedId,
    }));
    console.log("Selected skill id:", selectedId);
  };

  const handleChange = (e) => {
    setAddSkill((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  // Save Data to Backend
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/userSkill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Credentials: "include",
        body: JSON.stringify(addSkills),
      });
      const result = await response.json();
      if (!response.ok) {
        return alert(result.message);
      }
      alert("Skill Added Successfully.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Add Skill
      </Typography>

      <Box
        component="form"
        Validate
        sx={{ width: "500px" }}
        onSubmit={handleSaveChanges}
      >
        <Box sx={{ mb: 2, mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Skills List</InputLabel>
            <Select value={selectedSkill} onChange={handleSkillChange}>
              {skills.map((skill) => (
                <MenuItem key={skill.SkillID} value={skill.SkillID}>
                  {skill.SkillName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 2, mt: 2 }}>
          <TextField
            id="Description"
            name="Description"
            label="Skill Description"
            multiline
            fullWidth
            maxRows={4}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ mb: 2, mt: 2 }}>
          <TextField
            id="skillLevel"
            name="skillLevel"
            label="Skill Level"
            type="number"
            fullWidth
            onChange={handleChange}
          />
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
