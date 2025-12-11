import React from 'react';
import { Container, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

export default function ManageVehicles(){
  const vehicles = [
    { id: 'V-001', plate: 'ABC-1234', model: 'Ford Transit', status: 'Active' },
    { id: 'V-002', plate: 'XYZ-5678', model: 'Toyota Hiace', status: 'Maintenance' },
    { id: 'V-003', plate: 'LMN-9012', model: 'Suzuki Carry', status: 'Active' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Manage Vehicles</Typography>
      <Paper sx={{ p: 2 }}>
        <Button variant="contained" sx={{ mb: 2, mr: 2 }} href="/admin/vehicles/book">Add Vehicle Booking</Button>
        <Button variant="outlined" sx={{ mb: 2 }} href="/admin/vehicles/bookings">Manage Bookings</Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle ID</TableCell>
              <TableCell>Plate</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map(v => (
              <TableRow key={v.id} hover>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.plate}</TableCell>
                <TableCell>{v.model}</TableCell>
                <TableCell>{v.status}</TableCell>
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

