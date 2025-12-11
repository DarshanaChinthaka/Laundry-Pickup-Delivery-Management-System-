import React from 'react';
import { Container, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

export default function ManageCustomers(){
  const customers = [
    { id: 'C-001', name: 'Alice Johnson', phone: '+1 555-1010', email: 'alice@example.com' },
    { id: 'C-002', name: 'Bob Smith', phone: '+1 555-2020', email: 'bob@example.com' },
    { id: 'C-003', name: 'Carol White', phone: '+1 555-3030', email: 'carol@example.com' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Manage Customers</Typography>
      <Paper sx={{ p: 2 }}>
        <Button variant="contained" sx={{ mb: 2 }}>Add Customer</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => (
              <TableRow key={c.id} hover>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

