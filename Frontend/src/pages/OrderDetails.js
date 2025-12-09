import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Card, CardContent, CardHeader, Typography, Box, Chip, Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@mui/material';
import { ArrowBack as ArrowBackIcon, PrintOutlined as PrintIcon } from '@mui/icons-material';

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/api/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchOrder();
  }, [id]);

  const getStatusColor = (status) => {
    const colors = {
      PENDING: 'warning',
      PICKED_UP: 'info',
      IN_PROGRESS: 'info',
      READY_FOR_DELIVERY: 'success',
      DELIVERED: 'success',
      CANCELLED: 'error',
    };
    return colors[status] || 'default';
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress /></Box>;
  if (!order) return <Typography color="error">Order not found</Typography>;

  return (
    <Box>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/orders')} sx={{ mb: 2 }}>Back</Button>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardHeader 
          title={`Order #${order.id}`}
          subheader={`Created: ${new Date(order.createdAt).toLocaleDateString()}`}
          action={<Chip label={order.status} color={getStatusColor(order.status)} />}
          sx={{ bgcolor: 'primary.light', color: 'white' }}
        />
        <CardContent sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Customer Information</Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Name</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{order.customerName}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Phone</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{order.phone}</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Addresses</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Pickup</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{order.pickupAddress}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Delivery</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{order.deliveryAddress}</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Items</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ bgcolor: 'primary.light' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Item</TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Qty</TableCell>
                    <TableCell align="right" sx={{ color: 'white', fontWeight: 600 }}>Price</TableCell>
                    <TableCell align="right" sx={{ color: 'white', fontWeight: 600 }}>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.items.map(i => (
                    <TableRow key={i.id}>
                      <TableCell>{i.name}</TableCell>
                      <TableCell align="center">{i.quantity}</TableCell>
                      <TableCell align="right">${i.price.toFixed(2)}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>${(i.price * i.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Paper sx={{ p: 2, bgcolor: 'success.light', minWidth: 200, textAlign: 'right' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.dark' }}>
                Total: ${order.totalPrice.toFixed(2)}
              </Typography>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
