import React from "react";
import { Paper, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const connections = [
  { name: "John Doe", role: "UI/UX Designer" },
  { name: "Jane Smith", role: "React Developer" },
  { name: "Anil Kumar", role: "DevOps Engineer" },
];

function Connections() {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        Connections
      </Typography>
      <List>
        {connections.map((conn, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={conn.name} src={`https://i.pravatar.cc/150?img=${index + 4}`} />
            </ListItemAvatar>
            <ListItemText primary={conn.name} secondary={conn.role} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Connections;
