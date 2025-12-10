import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

export default function AdminDashboard(){
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Admin Dashboard (Mock)</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><Paper sx={{p:2}}>Total Bookings: 120</Paper></Grid>
        <Grid item xs={12} md={3}><Paper sx={{p:2}}>Active Drivers: 12</Paper></Grid>
        <Grid item xs={12} md={3}><Paper sx={{p:2}}>Pending Pickups: 8</Paper></Grid>
        <Grid item xs={12} md={3}><Paper sx={{p:2}}>Monthly Revenue: $2,300</Paper></Grid>
      </Grid>
    </Container>
  );
}
