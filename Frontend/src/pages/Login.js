import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Login(){
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{mb:2}}>Login</Typography>
      <Box component="form" sx={{display:'grid',gap:2}} onSubmit={e=>{e.preventDefault(); alert('Login (mock)')}}>
        <TextField label="Email" required />
        <TextField label="Password" type="password" required />
        <Button type="submit" variant="contained">Login</Button>
      </Box>
    </Container>
  );
}
