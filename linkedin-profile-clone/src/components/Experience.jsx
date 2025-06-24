import React from "react";
import { Paper, Typography, Box, Card, CardContent } from "@mui/material";

const experiences = [
  {
    title: "Front-End Developer Intern",
    company: "Tech Company",
    duration: "Jan 2024 - May 2024",
    description: "Worked on UI components using React and Material UI.",
  },
  {
    title: "Web Developer Trainee",
    company: "Code Labs",
    duration: "June 2023 - Dec 2023",
    description: "Built responsive landing pages and portfolio websites.",
  },
];

function Experience() {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {experiences.map((exp, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {exp.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company} — {exp.duration}
              </Typography>
              <Typography variant="body1" mt={1}>
                {exp.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  );
}

export default Experience;
