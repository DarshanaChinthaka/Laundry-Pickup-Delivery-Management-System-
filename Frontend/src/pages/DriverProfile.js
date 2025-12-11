import React from 'react';
import { Container, Typography, Paper, Avatar } from '@mui/material';

export default function DriverProfile(){
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Driver Profile</Typography>
      <Paper sx={{p:2}}>
        <div style={{display:'flex', gap:16}}>
          <Avatar sx={{width:80,height:80}}>D</Avatar>
          <div>
            <div><strong>Name:</strong> John Driver</div>
            <div><strong>Vehicle:</strong> Van - ABC-1234</div>
            <div><strong>Rating:</strong> 4.8</div>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

