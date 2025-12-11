import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function DriverOrders(){
  const orders = [
    { id: 'D-1001', pickup: '123 Main St', dropoff: '456 Oak Ave', status: 'Assigned' },
    { id: 'D-1002', pickup: '789 Pine Rd', dropoff: '101 Elm St', status: 'In Transit' },
  ];

  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Your Orders</Typography>
      <Paper sx={{p:2}}>
        <List>
          {orders.map(o => (
            <ListItem key={o.id} secondaryAction={<Button component={RouterLink} to={`/driver/orders/${o.id}`} size="small">Details</Button>}>
              <ListItemText primary={`${o.id} — ${o.pickup} → ${o.dropoff}`} secondary={o.status} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

