import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ChooseRole(){
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 2, textAlign: 'center' }} elevation={2}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Continue as</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>Choose a role to continue to the appropriate login screen.</Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate('/login?role=customer')}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Customer
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate('/login?role=admin')}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Admin
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate('/login?role=driver')}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Driver
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate('/login?role=employee')}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Employee
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
