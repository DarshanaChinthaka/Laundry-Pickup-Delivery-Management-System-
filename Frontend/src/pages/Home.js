import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5aa0 50%, #123a6b 100%)',
      color: '#fff',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 80,
    },
    heroContent: {
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      paddingX: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      flexWrap: 'wrap',
    },
    leftContent: {
      flex: 1,
      minWidth: 300,
      zIndex: 2,
    },
    rightImage: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    heroCircle: {
      width: 320,
      height: 320,
      borderRadius: '50%',
      border: '12px solid white',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    heroImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    preTitle: {
      fontSize: 16,
      fontWeight: 600,
      color: '#8ad03a',
      marginBottom: 12,
      letterSpacing: 1,
    },
    mainTitle: {
      fontSize: 56,
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: 20,
      color: '#fff',
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 1.6,
      marginBottom: 30,
      color: 'rgba(255,255,255,0.9)',
    },
    ctaButtons: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
    },
    btnPrimary: {
      backgroundColor: '#8ad03a',
      color: '#071f0b',
      padding: '14px 32px',
      borderRadius: 999,
      fontSize: 16,
      fontWeight: 700,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#7ab42e',
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 30px rgba(138,208,58,0.3)',
      },
    },
    btnSecondary: {
      backgroundColor: 'transparent',
      color: '#fff',
      padding: '14px 32px',
      borderRadius: 999,
      fontSize: 16,
      fontWeight: 700,
      border: '2px solid #fff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
        transform: 'translateY(-2px)',
      },
    },
    decorCircle: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: '#8ad03a',
      opacity: 0.1,
    },
    accentRight: {
      width: 300,
      height: 300,
      right: -100,
      top: 50,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8ad03a 0%, transparent 70%)',
      opacity: 0.15,
    },
    accentLeft: {
      width: 400,
      height: 400,
      left: -150,
      bottom: -50,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8ad03a 0%, transparent 70%)',
      opacity: 0.1,
    },
  };

  const navButtons = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box sx={styles.heroSection}>
      {/* Decorative circles */}
      <Box sx={{ ...styles.decorCircle, ...styles.accentRight }} />
      <Box sx={{ ...styles.decorCircle, ...styles.accentLeft }} />

      {/* Top Navigation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(30,58,95,0.95)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px',
          zIndex: 10,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: 20,
              color: '#fff',
              letterSpacing: -0.5,
            }}
          >
            Giggling
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: '#8ad03a',
                marginLeft: 1,
              }}
            >
              Laundry
            </Typography>
          </Typography>
        </Box>

        {/* Navigation links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
          {navButtons.map((btn) => (
            <Typography
              key={btn.label}
              component="a"
              href={btn.href}
              sx={{
                color: btn.label === 'Home' ? '#8ad03a' : '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#8ad03a',
                },
              }}
            >
              {btn.label}
            </Typography>
          ))}
        </Box>

        {/* Hamburger menu (mobile) */}
        <Typography sx={{ color: '#fff', fontSize: 24, cursor: 'pointer', display: { xs: 'block', md: 'none' } }}>
          ☰
        </Typography>
      </Box>

      {/* Main Hero Content */}
      <Container maxWidth="lg" sx={styles.heroContent}>
        {/* Left side - Text content */}
        <Box sx={styles.leftContent}>
          <Typography sx={styles.preTitle}>Laundry Presentation</Typography>
          <Typography sx={styles.mainTitle}>
            Laundry That<br />
            Makes Your Life<br />
            Easier
          </Typography>
          <Typography sx={styles.subtitle}>
            Experience the convenience of professional laundry pickup and delivery right at your doorstep. We handle the washing so you can focus on what matters.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={styles.ctaButtons}>
            <Button
              onClick={() => navigate('/book')}
              sx={{
                ...styles.btnPrimary,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#7ab42e',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 30px rgba(138,208,58,0.3)',
                },
              }}
            >
              Book Now
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              sx={{
                ...styles.btnSecondary,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Contact Now
            </Button>
          </Box>
        </Box>

        {/* Right side - Circular image */}
        <Box sx={styles.rightImage}>
          <Box sx={styles.heroCircle}>
            <img
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=400&fit=crop"
              alt="Professional laundry service"
              style={styles.heroImg}
            />
          </Box>
        </Box>
      </Container>

      {/* Page counter */}
      <Typography
        sx={{
          position: 'absolute',
          bottom: 30,
          right: 40,
          color: 'rgba(255,255,255,0.7)',
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Page 01
      </Typography>
    </Box>
  );
}
