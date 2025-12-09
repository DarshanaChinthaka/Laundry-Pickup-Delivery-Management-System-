import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, AppBar, Toolbar, Typography, Container, Paper, useMediaQuery, Button } from '@mui/material';
import OrderForm from './pages/OrderForm';
import OrderList from './pages/OrderList';
import OrderDetails from './pages/OrderDetails';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import logoTopRight from './laundry logo.PNG';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    success: { main: '#4caf50' },
    info: { main: '#0288d1' },
    warning: { main: '#f57c00' },
    background: { default: '#f5f7fa', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
});

function AppContent() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Service', path: '/service' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation Tabs with Logo on Left - Centered with Login/Sign Up */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2, 
        p: 1.5, 
        flexWrap: 'wrap',
        borderBottom: '1px solid rgba(15,23,42,0.08)',
        bgcolor: 'white'
      }}>
        <Box component="img" src={logoTopRight} alt="LaundryPro logo" sx={{ height: 80, width: 'auto' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flex: 1, flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <Paper
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 2,
                cursor: 'pointer',
                bgcolor: 'white',
                border: '1px solid rgba(15,23,42,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                }
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {item.label}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => navigate('/login')}
            sx={{ borderColor: 'primary.main', color: 'primary.main', fontWeight: 600 }}
          >
            Login
          </Button>
          <Button 
            variant="contained" 
            size="small"
            onClick={() => navigate('/signup')}
            sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Main Content Area - Centered */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', p: { xs: 2, sm: 3, md: 4 } }}>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Box sx={{
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            p: { xs: 2, sm: 3, md: 4 }
          }}>
            <Routes>
              <Route path="/" element={<CustomerDashboard />} />
              <Route path="/book" element={<OrderForm />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/driver" element={<DriverDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Box>
        </Container>
      </Box>

      {/* Footer - Centered */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        borderTop: '1px solid rgba(15,23,42,0.08)',
        bgcolor: 'white',
        mt: 'auto'
      }}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          © 2024 LaundryPro. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

