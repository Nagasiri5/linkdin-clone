import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";

function AnalyticsSection() {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2, mt: 2 }}>
      <Typography fontWeight={600} mb={2}>
        Analytics
      </Typography>

      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
        {/* Profile Views */}
        <Box flex={1} display="flex" gap={1}>
          <VisibilityIcon />
          <Box>
            <Typography fontWeight={600}>175 profile views</Typography>
            <Typography fontSize={14} color="text.secondary">
              Discover who's viewed your profile.
            </Typography>
          </Box>
        </Box>

        {/* Post Impressions */}
        <Box flex={1} display="flex" gap={1}>
          <BarChartIcon />
          <Box>
            <Typography fontWeight={600}>425 post impressions</Typography>
            <Typography fontSize={14} color="text.secondary">
              Check out who's engaging with your posts.
            </Typography>
          </Box>
        </Box>

        {/* Search Appearances */}
        <Box flex={1} display="flex" gap={1}>
          <SearchIcon />
          <Box>
            <Typography fontWeight={600}>6 search appearances</Typography>
            <Typography fontSize={14} color="text.secondary">
              See how often you appear in search results.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Show all analytics link */}
      <Box textAlign="center" mt={2}>
        <Typography fontWeight={500} sx={{ cursor: "pointer", color: "primary.main" }}>
          Show all analytics →
        </Typography>
      </Box>
    </Paper>
  );
}

export default AnalyticsSection;
