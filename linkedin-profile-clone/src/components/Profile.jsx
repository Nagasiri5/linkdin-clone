import React from "react";
import { Box, Typography, Avatar, Button, Stack, Paper, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";

function Profile() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        mb: 2,
        position: "relative",
      }}
    >
      {/* 🔷 Banner Image */}
      <Box sx={{ position: "relative" }}>
        <img
          src="/front end.jpg"
          alt="Banner"
          style={{ width: "100%", height: 200, objectFit: "cover" }}
        />
        {/* 🔷 Profile Avatar */}
        <Box sx={{ position: "absolute", bottom: -48, left: 32 }}>
          <Avatar
            src="/PASSPORT SIZE PIC.jpg"
            alt="Nagasiri"
            sx={{
              width: 96,
              height: 96,
              border: "3px solid white",
            }}
          />
        </Box>
      </Box>

      {/* 🔷 Basic Info */}
      <Box sx={{ mt: 8, px: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: 22,
            color: theme.palette.mode === "dark" ? "white" : "black",
          }}
        >
          Nagasiri Ramani
        </Typography>
        <Typography fontSize={15} sx={{ color: theme.palette.mode === "dark" ? "#ddd" : "#333" }}>
          Aspiring Front-End Developer | Passionate about UI/UX & Responsive Design
        </Typography>
        <Typography fontSize={14} sx={{ color: theme.palette.mode === "dark" ? "#bbb" : "#555" }}>
          Andhra Pradesh, India • 500+ connections
        </Typography>
      </Box>

      {/* 🔷 Action Buttons */}
      <Box sx={{ p: 2 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          useFlexGap
          alignItems="center"
        >
          <Button variant="contained" sx={{ textTransform: "none", fontSize: 14, fontWeight: 500, backgroundColor: "#0a66c2", color: "white", borderRadius: 5, '&:hover': { backgroundColor: "#004182" }, px: 3 }}>
            Open to
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", fontSize: 14, fontWeight: 500, borderColor: "#0a66c2", color: "#0a66c2", backgroundColor: "white", borderRadius: 5, '&:hover': { borderColor: "#004182", color: "#004182" }, px: 3 }}>
            Add profile section
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", fontSize: 14, fontWeight: 500, borderColor: "#0a66c2", color: "#0a66c2", backgroundColor: "white", borderRadius: 5, '&:hover': { borderColor: "#004182", color: "#004182" }, px: 3 }}>
            Enhance profile
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none", fontSize: 14, fontWeight: 500, borderColor: "black", color: "black", backgroundColor: "#e0e0e0", borderRadius: 5, '&:hover': { borderColor: "black", color: "black" }, px: 3 }}>
            Resources
          </Button>
        </Stack>
      </Box>

      {/* 🔷 Open to Work Box */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#eaf1fb",
          mx: 2,
          mb: 2,
          p: 2,
          borderRadius: 2,
          position: "relative",
        }}
      >
        {/* Edit icon */}
        <IconButton
          size="small"
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <EditIcon fontSize="small" />
        </IconButton>

        <Typography fontWeight={600} fontSize={14}>
          Open to work
        </Typography>
        <Typography fontSize={14} sx={{ color: "text.secondary", mt: 0.5 }}>
          Front-End Developer, HTML, CSS, React, UI Designer
        </Typography>
        <Typography
          fontSize={14}
          color="primary"
          sx={{ mt: 1, cursor: "pointer", fontWeight: 500 }}
        >
          Show details
        </Typography>
      </Paper>
    </Box>
  );
}

export default Profile;

