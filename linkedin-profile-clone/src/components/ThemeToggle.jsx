import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
