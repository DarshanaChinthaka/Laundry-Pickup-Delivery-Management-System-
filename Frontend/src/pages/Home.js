import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, Avatar, Stack } from '@mui/material';
import { LocalLaundryService, DeliveryDining, Favorite, Timer, ContactSupport, RoomService } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #123a6b 100%)',
        color: '#fff',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ color: 'success.light', fontWeight: 700 }}>Laundry Pickup & Delivery</Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, lineHeight: 1.05 }}>
                Laundry Pickup Delivery Management System
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, color: 'rgba(255,255,255,0.85)' }}>
                Fast, reliable, and convenient laundry service — scheduled pickup, professional care, and doorstep delivery.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button variant="contained" size="large" onClick={() => navigate('/book')} sx={{ bgcolor: 'success.main', px: 4, py: 1.5 }}>Book Now</Button>
                <Button variant="outlined" size="large" onClick={() => navigate('/contact')} sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.12)' }}>Contact Us</Button>
              </Stack>

              <Box sx={{ display: 'flex', gap: 3, mt: 6, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: 'success.main' }}><LocalLaundryService /></Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Wash & Fold</Typography>
                    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Quality cleaning</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: 'primary.light' }}><DeliveryDining /></Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Pickup & Delivery</Typography>
                    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>At your convenience</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: 'warning.light' }}><Favorite /></Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Eco Friendly</Typography>
                    <Typography sx={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Gentle on fabrics</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <Box sx={{ width: { xs: 320, sm: 360 }, height: { xs: 320, sm: 360 }, borderRadius: '50%', overflow: 'hidden', border: '8px solid rgba(255,255,255,0.06)', boxShadow: 6 }}>
                  <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d0b6?w=800&q=80&auto=format&fit=crop&s=1c3c3f" alt="Laundry service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main' }}><Timer /></Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>On-time Pickup</Typography>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Schedule a time that works for you.</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'success.main' }}><RoomService /></Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Professional Care</Typography>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Garment-by-garment attention and finishing.</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'warning.main' }}><ContactSupport /></Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Easy Support</Typography>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Chat or call our friendly support team.</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* How it works */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>How it works</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1} alignItems="flex-start">
                  <Avatar sx={{ bgcolor: 'primary.main' }}><LocalLaundryService /></Avatar>
                  <Typography sx={{ fontWeight: 800 }}>1. Book a pickup</Typography>
                  <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Choose service, schedule pickup at your address.</Typography>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1} alignItems="flex-start">
                  <Avatar sx={{ bgcolor: 'success.main' }}><DeliveryDining /></Avatar>
                  <Typography sx={{ fontWeight: 800 }}>2. We collect & clean</Typography>
                  <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Professional cleaning and careful handling.</Typography>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1} alignItems="flex-start">
                  <Avatar sx={{ bgcolor: 'warning.main' }}><Favorite /></Avatar>
                  <Typography sx={{ fontWeight: 800 }}>3. Delivery to you</Typography>
                  <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>Fresh, folded and returned at your doorstep.</Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>Ready to simplify your laundry?</Typography>
          <Typography sx={{ color: 'text.secondary', mt: 1 }}>Book a pickup in 2 minutes and let us take care of the rest.</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Button variant="contained" size="large" onClick={() => navigate('/book')} sx={{ bgcolor: 'success.main', px: 4 }}>Book Pickup</Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/contact')}>Get Support</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
