import React from "react";
import { Paper, Typography, Box, Card, CardContent } from "@mui/material";

const educationList = [
  {
    degree: "B.Tech in Electronics",
    institution: "DNR College of Engineering and Technology",
    duration: "2020 - 2024",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    duration: "2018 - 2020",
  },
];

function Education() {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {educationList.map((edu, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.institution} — {edu.duration}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  );
}

export default Education;
