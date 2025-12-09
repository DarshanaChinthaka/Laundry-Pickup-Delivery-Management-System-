import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, TextField, Button, Typography, Container, Link } from '@mui/material';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.zipCode || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Add your signup logic here
    console.log('Sign Up:', formData);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Sign Up
          </Typography>

          {error && (
            <Box sx={{ bgcolor: '#ffebee', color: '#c62828', p: 2, borderRadius: 1, mb: 3 }}>
              <Typography variant="body2">{error}</Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Full Name"
              fullWidth
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <TextField
              label="Phone Number"
              fullWidth
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

            <TextField
              label="Address"
              fullWidth
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your street address"
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <TextField
                label="City"
                fullWidth
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />

              <TextField
                label="Zip Code"
                fullWidth
                variant="outlined"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter your zip code"
              />
            </Box>

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              variant="outlined"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleSignUp}
              sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, py: 1.5 }}
            >
              Sign Up
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link
                  onClick={() => navigate('/login')}
                  sx={{ color: 'primary.main', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
