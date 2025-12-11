import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Avatar } from '@mui/material';

export default function ManageDrivers(){
  const drivers = [
    { id: 'D-001', name: 'Mike R.', vehicle: 'Van - ABC123' },
    { id: 'D-002', name: 'Sarah L.', vehicle: 'Bike - BIK456' },
    { id: 'D-003', name: 'Tom K.', vehicle: 'Van - XYZ789' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Manage Drivers</Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          {drivers.map(d => (
            <ListItem key={d.id} secondaryAction={<Button size="small">Assign</Button>}>
              <Avatar sx={{ mr: 2 }}>{d.name.split(' ').map(n=>n[0]).join('')}</Avatar>
              <ListItemText primary={`${d.name} (${d.vehicle})`} secondary={d.id} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

