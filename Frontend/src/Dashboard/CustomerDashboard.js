import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Grid, Typography, Paper, Container } from '@mui/material';
import logo from '../laundry logo.PNG';
import { LocalShipping as LocalShippingIcon, Inventory as InventoryIcon, Notifications as NotificationsIcon, Speed as SpeedIcon } from '@mui/icons-material';
import bg from '../background.png';

export default function CustomerDashboard() {
  const navigate = useNavigate();

  // features removed as requested

  return (
    <Box>
      {/* New hero matching attached design */}
      <Box sx={{
        width: '100%',
        bgcolor: 'primary.dark',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 }
      }}>
        {/* green decorative shape top-right */}
        <Box sx={{ position: 'absolute', right: -80, top: -80, width: 300, height: 300, bgcolor: 'success.main', borderRadius: '50%' }} />
        {/* green decorative shape bottom-left */}
        <Box sx={{ position: 'absolute', left: -120, bottom: -120, width: 440, height: 440, bgcolor: 'success.main', borderRadius: '50%' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, position: 'relative' }}>
                <Box sx={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  border: '8px solid white',
                  overflow: 'hidden',
                  boxShadow: 3,
                  backgroundColor: 'transparent'
                }}>
                  <Box component="img" src={bg} alt="hero" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, pl: { md: 6 } }}>
                <Typography variant="subtitle2" sx={{ color: 'success.main', fontWeight: 700, mb: 1 }}>Laundry Presentation</Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1.05, mb: 3 }}>
                  Laundry That
                  <br />
                  Makes Your Life
                  <br />
                  Easier
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button variant="contained" size="large" onClick={() => navigate('/book')} sx={{ bgcolor: 'success.main', color: 'primary.dark', fontWeight: 800, px: 4, py: 1.5 }}>
                    Book Now
                  </Button>
                  <Button variant="outlined" size="large" onClick={() => navigate('/contact')} sx={{ borderColor: 'success.main', color: 'white', fontWeight: 700, px: 3 }}>
                    Contact Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* features section removed */}
    </Box>
  );
}
