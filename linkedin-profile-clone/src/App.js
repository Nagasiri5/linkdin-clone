import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ActivityFeed from "./components/ActivityFeed";
import Connections from "./components/Connections";
import AnalyticsSection from "./components/AnalyticsSection";
import AboutSection from "./components/AboutSection"; // ✅ New import

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Page background wrapper like LinkedIn */}
      <Box sx={{ backgroundColor: "#f3f2ef", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
            {/* Main column */}
            <Box flex={1}>
              <Profile />
              <AnalyticsSection />  {/* ✅ Below Profile */}
              <AboutSection />      {/* ✅ Below Analytics */}
              <Experience />
              <Education />
              <Skills />
              <ActivityFeed />
              <Connections />
            </Box>

            {/* Sidebar on the right */}
            <Sidebar />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;


