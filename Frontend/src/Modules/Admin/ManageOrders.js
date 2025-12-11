import React from 'react';
import { Container, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button } from '@mui/material';

export default function ManageOrders(){
  const orders = [
    { id: 'ORD-1024', customer: 'Alice Johnson', status: 'Pickup Scheduled', amount: '$32' },
    { id: 'ORD-1025', customer: 'Bob Smith', status: 'In Process', amount: '$48' },
    { id: 'ORD-1026', customer: 'Carol White', status: 'Out for Delivery', amount: '$25' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Manage Orders</Typography>
      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(o => (
              <TableRow key={o.id} hover>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell><Chip label={o.status} color="info" size="small"/></TableCell>
                <TableCell>{o.amount}</TableCell>
                <TableCell>
                  <Button size="small">View</Button>
                  <Button size="small">Assign</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

