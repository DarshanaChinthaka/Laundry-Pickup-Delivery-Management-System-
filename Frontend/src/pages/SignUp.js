import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function SignUp(){
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{mb:2}}>Sign Up</Typography>
      <Box component="form" sx={{display:'grid',gap:2}} onSubmit={e=>{e.preventDefault(); alert('Sign up (mock)')}}>
        <TextField label="Full name" required />
        <TextField label="Email" required />
        <TextField label="Phone" />
        <TextField label="Password" type="password" required />
        <Button type="submit" variant="contained">Create account</Button>
      </Box>
    </Container>
  );
}
