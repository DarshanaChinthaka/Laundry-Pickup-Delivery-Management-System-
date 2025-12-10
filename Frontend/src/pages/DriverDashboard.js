import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function DriverDashboard(){
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Driver Dashboard (Mock)</Typography>
      <Paper sx={{p:2}}>Assigned jobs and route info would appear here.</Paper>
    </Container>
  );
}
