import React from 'react';
import { Container, Grid, Box, Typography, Paper, Link } from '@mui/material';
import { Phone as PhoneIcon, Language as LanguageIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import bg from '../background.png';

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 540 }}>
            <Paper sx={{ overflow: 'hidden', borderRadius: 2 }} elevation={1}>
              <Box component="img" src={bg} alt="contact" sx={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />
            </Paper>

            <Box sx={{ position: 'absolute', top: 16, left: 24, bgcolor: 'success.main', color: 'white', px: 3, py: 1.5, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                99%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95 }}>Our service is the best and friendliest to customers</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Contact Us for Laundry Assistance</Typography>

          <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: { xs: 3, md: 4 }, borderRadius: 2 }} elevation={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.08)', p: 1.25, borderRadius: 1 }}>
                    <PhoneIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Phone Number</Typography>
                    <Typography sx={{ mt: 1 }}>123-456-7890<br/>+123-456-7890</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.08)', p: 1.25, borderRadius: 1 }}>
                    <LanguageIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Social Media</Typography>
                    <Typography sx={{ mt: 1 }}>@reallygreatsite<br/><Link href="mailto:hello@reallygreatsite.com" sx={{ color: 'white' }}>hello@reallygreatsite.com</Link></Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.08)', p: 1.25, borderRadius: 1 }}>
                    <LocationOnIcon sx={{ color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Address</Typography>
                    <Typography sx={{ mt: 1 }}>123 Anywhere St.,<br/>Any City, ST 12345</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
