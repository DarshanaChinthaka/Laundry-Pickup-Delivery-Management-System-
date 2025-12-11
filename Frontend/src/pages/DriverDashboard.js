import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function DriverDashboard(){
  const tasks = [
    { id: 'D-1001', from: '123 Main St', to: '456 Oak Ave', status: 'Assigned' },
    { id: 'D-1002', from: '789 Pine Rd', to: '101 Elm St', status: 'In Transit' },
  ];

  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Driver Dashboard</Typography>

      <Stack direction="row" spacing={2} sx={{mb:2}}>
        <Button component={RouterLink} to="/driver/orders" variant="contained">My Orders</Button>
        <Button component={RouterLink} to="/driver/profile" variant="outlined">Profile</Button>
      </Stack>

      <Paper sx={{p:2}}>
        <Typography variant="subtitle1" sx={{mb:1}}>Assigned Tasks</Typography>
        <List>
          {tasks.map(t => (
            <ListItem key={t.id} secondaryAction={<Button component={RouterLink} to={`/driver/orders/${t.id}`} size="small">Start</Button>}>
              <ListItemText primary={`${t.id} • ${t.from} → ${t.to}`} secondary={t.status} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
