import React from "react";
import { Paper, Typography, Box } from "@mui/material";

function AboutSection() {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2, mt: 2 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        About
      </Typography>
      <Box sx={{ whiteSpace: "pre-line" }}>
        <Typography>
          Hi! I'm Nagasiri Ramani, a passionate and curious Front end developer fresher who loves building things the smart way.

          I recently completed my BTech in 2024 and since then, I’ve been learning and working on real-time Front end projects.
        </Typography>
      </Box>
    </Paper>
  );
}

export default AboutSection;
