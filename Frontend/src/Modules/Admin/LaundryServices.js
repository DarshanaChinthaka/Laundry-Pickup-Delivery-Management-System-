import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';

export default function LaundryServices(){
  const services = [
    { id: 'S-01', name: 'Wash & Fold', price: '$5/kg' },
    { id: 'S-02', name: 'Dry Clean', price: '$8/item' },
    { id: 'S-03', name: 'Ironing', price: '$2/item' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Laundry Services</Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {services.map(s => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>{s.name}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{s.price}</Typography>
                  <Button size="small" sx={{ mt: 2 }}>Edit</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

