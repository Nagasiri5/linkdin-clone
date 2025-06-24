import React from "react";
import { Paper, Typography, Box, Chip } from "@mui/material";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Material UI",
  "Git",
  "GitHub",
  "AWS",
  "Docker",
];

function Skills() {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" />
        ))}
      </Box>
    </Paper>
  );
}

export default Skills;
