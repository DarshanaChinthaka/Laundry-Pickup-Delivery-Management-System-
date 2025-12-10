import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const role = params.get('role'); // expected 'customer' or 'admin'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    // Mock authentication - replace with real API
    // For demo: any credentials succeed
    if(role === 'admin'){
      // mark session for demo
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else if(role === 'customer'){
      localStorage.setItem('role', 'customer');
      navigate('/customer');
    } else {
      // no role provided - ask user to choose
      // default to customer
      localStorage.setItem('role', 'customer');
      navigate('/customer');
    }
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{mb:2}}>Login {role ? `- ${role.charAt(0).toUpperCase()+role.slice(1)}` : ''}</Typography>
      <Box component="form" sx={{display:'grid',gap:2}} onSubmit={handleSubmit}>
        <TextField label="Email" required value={email} onChange={e=>setEmail(e.target.value)} />
        <TextField label="Password" type="password" required value={password} onChange={e=>setPassword(e.target.value)} />
        <Button type="submit" variant="contained">Login</Button>
      </Box>
    </Container>
  );
}
