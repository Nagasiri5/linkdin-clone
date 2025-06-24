import React from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Sidebar() {
  const viewerList = [
    {
      name: "Someone at Bhoj Reddy Engineering College for Women (BRECW), Hyderabad",
    },
    {
      name: "Someone at Silicon Institute of Technology (SIT), Bhubaneswar",
    },
    {
      name: "Someone at CMR College of Engineering & Technology",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}>
      {/* 🔷 Profile Language Box */}
      <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={600}>Profile language</Typography>
          <IconButton size="small">
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography fontSize={14} color="text.secondary" mt={1}>
          English
        </Typography>
      </Paper>

      {/* 🔷 Public Profile & URL Box */}
      <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={600}>Public profile & URL</Typography>
          <IconButton size="small">
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography fontSize={14} color="text.secondary" mt={1}>
          www.linkedin.com/in/naga-siri-ramani5
        </Typography>
      </Paper>

      {/* 🔷 Image Section */}
      <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
        <Box
          component="img"
          src="/sidebar-hiring.png" // Your image file
          alt="LinkedIn hiring"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 1,
          }}
        />
      </Paper>

      {/* 🔷 Viewers Section - Now Moved to Bottom */}
      <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={600} fontSize={15}>
          Who your viewers also viewed
        </Typography>
        <Box display="flex" alignItems="center" mt={0.5} mb={2}>
          <VisibilityOffIcon sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }} />
          <Typography fontSize={13} color="text.secondary">
            Private to you
          </Typography>
        </Box>

        {viewerList.map((viewer, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
            <Box flex={1}>
              <Typography fontSize={14}>{viewer.name}</Typography>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  mt: 0.5,
                  fontSize: 12,
                  textTransform: "none",
                  borderRadius: 5,
                  padding: "2px 10px",
                }}
              >
                View
              </Button>
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}

export default Sidebar;




