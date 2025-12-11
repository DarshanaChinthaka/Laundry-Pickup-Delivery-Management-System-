import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

export default function ManageVehicleBookings(){
  const bookings = [
    { id: 'VB-1001', vehicle: 'V-001', driver: 'Mike R.', date: '2025-12-12', time: '09:00', status: 'Scheduled' },
    { id: 'VB-1002', vehicle: 'V-002', driver: 'Sarah L.', date: '2025-12-12', time: '11:00', status: 'In Progress' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Vehicle Bookings</Typography>
      <Paper sx={{ p: 2 }}>
        <Button variant="contained" href="/admin/vehicles/book">New Booking</Button>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(b => (
              <TableRow key={b.id} hover>
                <TableCell>{b.id}</TableCell>
                <TableCell>{b.vehicle}</TableCell>
                <TableCell>{b.driver}</TableCell>
                <TableCell>{b.date}</TableCell>
                <TableCell>{b.time}</TableCell>
                <TableCell>{b.status}</TableCell>
                <TableCell>
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">Cancel</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

