import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, MenuItem } from '@mui/material';

export default function VehicleBookingForm(){
  const [form, setForm] = useState({ vehicleId: '', date: '', time: '', driver: '', notes: '' });
  const vehicles = [ 'V-001', 'V-002', 'V-003' ];
  const drivers = [ 'Mike R.', 'Sarah L.', 'Tom K.' ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Vehicle booking submitted (mock)'); };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>Add Vehicle Booking</Typography>
      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            select
            label="Vehicle"
            name="vehicleId"
            value={form.vehicleId}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {vehicles.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
          </TextField>

          <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} fullWidth sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />
          <TextField label="Time" name="time" type="time" value={form.time} onChange={handleChange} fullWidth sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} />

          <TextField select label="Driver" name="driver" value={form.driver} onChange={handleChange} fullWidth sx={{ mb: 2 }}>
            {drivers.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
          </TextField>

          <TextField label="Notes" name="notes" value={form.notes} onChange={handleChange} fullWidth multiline rows={3} sx={{ mb: 2 }} />

          <Button type="submit" variant="contained">Submit Booking</Button>
        </form>
      </Paper>
    </Container>
  );
}

