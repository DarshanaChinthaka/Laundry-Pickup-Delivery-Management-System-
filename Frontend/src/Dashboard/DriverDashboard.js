import React from 'react';
import { Card, CardContent, CardHeader, Box, Grid, Typography, Paper, Chip, Button } from '@mui/material';
import { Check as CheckIcon, Navigation as NavigationIcon } from '@mui/icons-material';

const mockDeliveries = [
  { id: 1, customer: 'Alice Johnson', address: '123 Main St', status: 'pickup_pending', time: '2:00 PM' },
  { id: 2, customer: 'Bob Smith', address: '456 Oak Ave', status: 'in_transit', time: '3:30 PM' },
  { id: 3, customer: 'Carol White', address: '789 Pine Rd', status: 'delivered', time: '4:15 PM' },
];

export default function DriverDashboard() {
  const getStatusChip = (status) => {
    const chips = {
      pickup_pending: { label: 'Pickup Pending', color: 'warning' },
      in_transit: { label: 'In Transit', color: 'info' },
      delivered: { label: 'Delivered', color: 'success' },
    };
    return chips[status] || { label: status, color: 'default' };
  };

  return (
    <Box>
      <Card sx={{ boxShadow: 3, borderRadius: 2, mb: 3 }}>
        <CardHeader 
          title="My Deliveries"
          subheader="Today's schedule"
          sx={{ bgcolor: 'primary.light', color: 'white' }}
        />
        <CardContent>
          <Grid container spacing={2}>
            {mockDeliveries.map((d) => (
              <Grid item xs={12} key={d.id}>
                <Paper sx={{ p: 2.5, boxShadow: 1, borderRadius: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{d.customer}</Typography>
                    <Typography variant="body2" color="text.secondary">{d.address}</Typography>
                    <Typography variant="caption" color="text.secondary">Scheduled: {d.time}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Chip label={getStatusChip(d.status).label} color={getStatusChip(d.status).color} />
                    {d.status !== 'delivered' && (
                      <Button variant="contained" size="small" startIcon={<NavigationIcon />}>
                        Nav
                      </Button>
                    )}
                    {d.status !== 'delivered' && (
                      <Button variant="outlined" size="small" startIcon={<CheckIcon />}>
                        Done
                      </Button>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
