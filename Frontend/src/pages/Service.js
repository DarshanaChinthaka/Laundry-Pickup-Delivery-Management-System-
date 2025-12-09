import React from 'react';
import { Container, Grid, Box, Typography, Paper, Avatar, LinearProgress, Divider } from '@mui/material';
import bg from '../background.png';
import logo from '../laundry logo.PNG';

export default function Service() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Hero / Intro */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box sx={{ width: 140, height: 180, borderRadius: 2, overflow: 'hidden' }}>
              <Box component="img" src={bg} alt="hero-left-1" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ width: 140, height: 180, borderRadius: 2, overflow: 'hidden' }}>
              <Box component="img" src={bg} alt="hero-left-2" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ position: 'absolute', left: 0, bottom: -24, display: 'flex', gap: 2 }}>
              <Paper sx={{ bgcolor: 'success.main', color: 'white', p: 2, borderRadius: 2, minWidth: 170 }} elevation={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Phone or Chat Service</Typography>
                <Typography variant="body2">Make sure they can easily order by phone or chat.</Typography>
              </Paper>

              <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 2, minWidth: 170 }} elevation={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Free Pick Up & Delivery</Typography>
                <Typography variant="body2">This service makes it easy for you to do your laundry.</Typography>
              </Paper>

              <Paper sx={{ bgcolor: 'success.main', color: 'white', p: 2, borderRadius: 2, minWidth: 170 }} elevation={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Safety & Cleanliness</Typography>
                <Typography variant="body2">Make sure they can easily order by phone or chat.</Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Optimizing Pick Up & Drop Off services</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We build a reliable pickup and drop off experience — convenient, safe and fast. Book pickup time
            that suits you and track delivery in real time.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Team */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>Meet Our Best Team</Typography>
      </Box>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar src={bg} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
            <Typography sx={{ fontWeight: 700 }}>Adora Montminy</Typography>
            <Typography color="text.secondary">Laundry Manager</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar src={bg} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
            <Typography sx={{ fontWeight: 700 }}>Reese Miller</Typography>
            <Typography color="text.secondary">Ironing Attendant</Typography>

            <Box sx={{ mt: 2, textAlign: 'left' }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>Laundry Service</Typography>
              <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 2, mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: 700 }}>Teamwork</Typography>
              <LinearProgress variant="determinate" value={70} sx={{ height: 8, borderRadius: 2 }} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar src={bg} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
            <Typography sx={{ fontWeight: 700 }}>Hannah Morales</Typography>
            <Typography color="text.secondary">Laundry Attendant</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Gallery */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>About our laundry activities gallery</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>Presenting a different laundry experience, with a comfortable and aesthetic atmosphere.</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} sx={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} sx={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} sx={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box component="img" src={bg} sx={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Testimonials */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>Laundry Customer Testimonials</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>Very efficient delivery and pick up my clothes were returned in perfect condition.</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: 3, borderRadius: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>Rufus Stewart</Typography>
            <Typography sx={{ mt: 2 }}>&quot;Very efficient delivery and pick up my clothes were returned in perfect condition.&quot;</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ bgcolor: 'success.main', color: 'white', p: 3, borderRadius: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>Helene Paquet</Typography>
            <Typography sx={{ mt: 2 }}>&quot;Very efficient delivery and pick up my clothes were returned in perfect condition.&quot;</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ bgcolor: 'primary.main', color: 'white', p: 3, borderRadius: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>Harper Russo</Typography>
            <Typography sx={{ mt: 2 }}>&quot;Very efficient delivery and pick up my clothes were returned in perfect condition.&quot;</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
