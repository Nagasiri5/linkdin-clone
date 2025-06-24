import React from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Stack,
  Avatar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ThemeToggle from "./ThemeToggle"; // ✅ Step 1: Import Toggle

function Header({ darkMode, setDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* 🔹 Left: Logo + Search */}
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* LinkedIn logo */}
            <Box
              sx={{
                width: 34,
                height: 34,
                backgroundColor: "#0A66C2",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Arial",
                }}
              >
                in
              </Typography>
            </Box>

            {/* Search bar */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f3f2ef",
                  borderRadius: 20,
                  border: "1px solid #ccc",
                  pl: 1,
                  width: "260px",
                  height: 34,
                }}
              >
                <SearchIcon sx={{ color: "#666" }} />
                <InputBase
                  placeholder="Search"
                  sx={{
                    ml: 1,
                    fontSize: 14,
                    flex: 1,
                    "&::placeholder": {
                      color: "#888",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            )}
          </Stack>

          {/* 🔹 Right: Icons */}
          <Stack direction="row" alignItems="center" spacing={isMobile ? 1.5 : 3}>
            <HeaderItem icon={<HomeIcon />} label="Home" isMobile={isMobile} />
            <HeaderItem icon={<PeopleIcon />} label="My Network" isMobile={isMobile} />
            <HeaderItem icon={<WorkIcon />} label="Jobs" isMobile={isMobile} />
            <HeaderItem icon={<ChatIcon />} label="Messaging" isMobile={isMobile} />
            <HeaderItem icon={<NotificationsIcon />} label="Notifications" isMobile={isMobile} />
            <HeaderItem
              icon={<Avatar src="/PASSPORT SIZE PIC.jpg" sx={{ width: 30, height: 30 }} />}
              label="Me ▾"
              isMobile={isMobile}
            />
            {!isMobile && (
              <>
                <HeaderItem icon={<AppsIcon />} label="For Business ▾" />
                <HeaderItem
                  icon={<BusinessCenterIcon sx={{ color: "#c37d16" }} />}
                  label="Try Premium for ₹0"
                  labelColor="#915907"
                />
              </>
            )}

            {/* 🔆 Theme Toggle Button (🌞/🌙) */}
            {!isMobile && <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function HeaderItem({ icon, label, isMobile, labelColor = "#555" }) {
  return (
    <Stack alignItems="center" spacing={0.2}>
      <IconButton>{icon}</IconButton>
      {!isMobile && (
        <Typography fontSize={12} sx={{ color: labelColor, textAlign: "center" }}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}

export default Header;

