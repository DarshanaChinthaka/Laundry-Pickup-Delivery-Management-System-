import React from 'react';
import {
  Card, CardContent, CardHeader, Box, Grid, Typography, Paper
} from '@mui/material';
import {
  BarChart, Bar, PieChart, Pie, Tooltip, Legend,
  CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell
} from 'recharts';

import {
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const mockData = {
  orders: 156,
  pending: 23,
  drivers: 8,
  revenue: '$4,280',
  chartData: [
    { name: 'Mon', orders: 24, delivered: 20 },
    { name: 'Tue', orders: 32, delivered: 28 },
    { name: 'Wed', orders: 28, delivered: 25 },
    { name: 'Thu', orders: 35, delivered: 32 },
    { name: 'Fri', orders: 42, delivered: 40 },
    { name: 'Sat', orders: 38, delivered: 36 },
  ],
  statusData: [
    { name: 'Pending', value: 23, color: '#ff9800' },
    { name: 'In Progress', value: 45, color: '#2196f3' },
    { name: 'Delivered', value: 88, color: '#4caf50' },
  ],
};

export default function AdminDashboard() {

  const StatCard = ({ icon, label, value, color }) => (
    <Paper
      sx={{
        p: 3,
        background: "linear-gradient(180deg, #1976d2, #42a5f5)",
        color: "white",
        borderRadius: 3,
        textAlign: "center",
        boxShadow: 3,
      }}
    >
      <Box sx={{ fontSize: 40, mb: 1, opacity: 0.9 }}>{icon}</Box>
      <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{value}</Typography>
      <Typography sx={{ fontSize: 14, opacity: 0.85 }}>{label}</Typography>
    </Paper>
  );

  return (
    <Box
      sx={{
        p: 2,
        backgroundImage: `url("/mnt/data/450BB379-882C-498A-AEF4-0D2B29E0B494.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Top Blue Header */}
      <Box
        sx={{
          p: 2.5,
          mb: 3,
          borderRadius: 3,
          background: "linear-gradient(90deg, #0ea5e9, #2563eb)",
          color: "white",
          boxShadow: 4,
        }}
      >
        <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
          Laundry Admin Dashboard
        </Typography>
        <Typography>{new Date().toLocaleString()}</Typography>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<ShoppingCartIcon fontSize="inherit" />} label="Total Orders" value={mockData.orders} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<LocalShippingIcon fontSize="inherit" />} label="Pending Orders" value={mockData.pending} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<PersonIcon fontSize="inherit" />} label="Active Drivers" value={mockData.drivers} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<TrendingUpIcon fontSize="inherit" />} label="Today Revenue" value={mockData.revenue} />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3}>
        {/* Orders Trend */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardHeader
              title="Orders Trend"
              subheader="Last 7 days"
              sx={{
                background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                color: "white",
                borderRadius: "12px 12px 0 0",
              }}
            />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#1e40af" />
                  <Bar dataKey="delivered" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardHeader
              title="Order Status Breakdown"
              sx={{
                background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                color: "white",
                borderRadius: "12px 12px 0 0",
              }}
            />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockData.statusData}
                    cx="50%"
                    cy="50%"
                    label
                    dataKey="value"
                  >
                    {mockData.statusData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
