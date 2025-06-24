import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const activities = [
  "Liked a post from John Doe",
  "Commented on a React project",
  "Started following Jane Smith",
  "Shared an article on DevOps",
];

function ActivityFeed() {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ActivityFeed;
