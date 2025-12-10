import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import bg from '../background.png';
import logo from '../laundry-logo.png';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ pr: { md: 6 } }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              About Our Laundry Pickup & Delivery Management System
            </Typography>

            <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 700, mb: 2 }}>
              Providing the Best Service
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
              We deliver a friendly, fast, and reliable laundry pickup and delivery service.
              Our team takes care of your garments with professional cleaning, careful
              handling and timely delivery so you can save time and enjoy freshly
              cleaned clothes without any hassle.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4" sx={{ color: 'success.main', fontWeight: 800 }}>
                98.12%
              </Typography>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Fast and accurate laundry</Typography>
                <Typography variant="body2" color="text.secondary">completion time</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4, color: 'text.disabled', fontSize: 12 }}>www.reallygreatsite.com</Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} alt="wash by kilo" sx={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Wash by the kilo</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} alt="wash once" sx={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Wash once only</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} alt="ironing" sx={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Ironing service</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} alt="additional services" sx={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Additional services</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
