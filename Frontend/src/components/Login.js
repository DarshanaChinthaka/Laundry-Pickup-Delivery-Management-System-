import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, TextField, Button, Typography, Container, Link } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Basic role-routing logic for demo purposes
    const normalized = email.trim().toLowerCase();
    console.log('Login attempt:', { email: normalized });
    // Admin credential (demo): laundry@gmail.com
    if (normalized === 'laundry@gmail.com') {
      setError('');
      navigate('/admin');
      return;
    }

    // Any gmail address is treated as a customer for this demo
    if (normalized.endsWith('@gmail.com')) {
      setError('');
      navigate('/');
      return;
    }

    setError('Invalid credentials. Use @gmail.com emails for customers or laundry@gmail.com for admin.');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Login
          </Typography>

          {error && (
            <Box sx={{ bgcolor: '#ffebee', color: '#c62828', p: 2, borderRadius: 1, mb: 3 }}>
              <Typography variant="body2">{error}</Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleLogin}
              sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, py: 1.5 }}
            >
              Login
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  onClick={() => navigate('/signup')}
                  sx={{ color: 'primary.main', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
