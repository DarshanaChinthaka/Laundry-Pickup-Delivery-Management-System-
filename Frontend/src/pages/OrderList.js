import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

export default function OrderList(){
  const sample = [ {id:'BKG-001', customer:'Suresh', time:'2025-12-10 09:30', status:'Pending'} ];
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Orders</Typography>
      <Table>
        <TableHead><TableRow><TableCell>Booking ID</TableCell><TableCell>Customer</TableCell><TableCell>Time</TableCell><TableCell>Status</TableCell><TableCell>Actions</TableCell></TableRow></TableHead>
        <TableBody>
          {sample.map(s=> (
            <TableRow key={s.id}><TableCell>{s.id}</TableCell><TableCell>{s.customer}</TableCell><TableCell>{s.time}</TableCell><TableCell>{s.status}</TableCell><TableCell><Button size="small">View</Button></TableCell></TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
