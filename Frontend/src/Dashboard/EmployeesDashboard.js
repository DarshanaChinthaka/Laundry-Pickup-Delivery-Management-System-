import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar, Button, List, ListItem, ListItemText, Divider, Stack } from '@mui/material';
import { Person, Checklist, Inventory, AccessTime } from '@mui/icons-material';

export default function EmployeesDashboard() {
  const stats = [
    { label: "Today's Tasks", value: 5, icon: <Checklist />, color: 'primary.main' },
    { label: 'Pending Bookings', value: 3, icon: <Inventory />, color: 'success.main' },
    { label: 'Hours Logged', value: '6h 40m', icon: <AccessTime />, color: 'warning.main' },
  ];

  const tasks = [
    { id: 'T-1001', title: 'Pickup at 123 Main St', time: '09:30 AM' },
    { id: 'T-1002', title: 'Dropoff at 456 Oak Ave', time: '11:00 AM' },
    { id: 'T-1003', title: 'Collect laundry - Apt 12B', time: '01:30 PM' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>Employee Dashboard</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Overview of your tasks, bookings, and quick actions.</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {stats.map((s, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: s.color, width: 48, height: 48 }}>{s.icon}</Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 800, fontSize: 18 }}>{s.value}</Typography>
                        <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>{s.label}</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Paper sx={{ mt: 3, p: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Today's Tasks</Typography>
              <List>
                {tasks.map((t) => (
                  <React.Fragment key={t.id}>
                    <ListItem secondaryAction={<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t.time}</Typography>}>
                      <ListItemText primary={t.title} secondary={t.id} />
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="contained">View all tasks</Button>
              </Box>
            </Paper>

            <Paper sx={{ mt: 3, p: 2, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Quick Actions</Typography>
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                <Button variant="outlined">Start Shift</Button>
                <Button variant="outlined">Report Issue</Button>
                <Button variant="outlined">Mark Complete</Button>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', bgcolor: 'primary.main' }}><Person sx={{ fontSize: 40 }} /></Avatar>
              <Typography sx={{ fontWeight: 800, mt: 2 }}>Alex Employee</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>Route operator</Typography>

              <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button variant="contained">Profile</Button>
                <Button variant="outlined">Schedule</Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>Contact</Typography>
              <Typography sx={{ fontSize: 14 }}>+1 (555) 123-4567</Typography>
              <Typography sx={{ fontSize: 14 }}>employee@laundry.com</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
