import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

export default function OrderForm(){
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Order Form (Mock)</Typography>
      <Box component="form" sx={{display:'grid',gap:2,maxWidth:600}} onSubmit={e=>{e.preventDefault(); alert('Order submitted (mock)')}}>
        <TextField label="Customer Name" required />
        <TextField label="Phone" />
        <TextField label="Pickup Address" />
        <TextField label="Pickup Date & Time" type="datetime-local" InputLabelProps={{shrink:true}} />
        <Button type="submit" variant="contained">Book Pickup</Button>
      </Box>
    </Container>
  );
}
