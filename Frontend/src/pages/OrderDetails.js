import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function OrderDetails(){
  const { id } = useParams();
  return (
    <Container>
      <Typography variant="h5" sx={{mb:2}}>Order Details - {id}</Typography>
      <Box sx={{p:2, bgcolor:'#f8fafc', borderRadius:2}}>Details for order {id} (mock)</Box>
    </Container>
  );
}
