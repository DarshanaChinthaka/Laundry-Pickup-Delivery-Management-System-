import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

export default function CustomerDashboard(){
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Customer Dashboard (Mock)</Typography>
      <Box sx={{display:'grid',gap:2}}>
        <Paper sx={{p:2}}>Upcoming pickups</Paper>
        <Paper sx={{p:2}}>Recent orders</Paper>
      </Box>
    </Container>
  );
}
