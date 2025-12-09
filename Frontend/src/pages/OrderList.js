import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Box, Button, Chip, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GetApp as GetAppIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/orders');
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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

  const exportPdf = async () => {
    const element = document.querySelector('.MuiDataGrid-root');
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: '#fff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('orders.pdf');
  };

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 100, type: 'number' },
    { field: 'customerName', headerName: 'Customer', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusColor(params.value)} size="small" />
      ),
    },
    {
      field: 'totalPrice',
      headerName: 'Total',
      width: 100,
      renderCell: (params) => `$${params.value?.toFixed(2) || '0.00'}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Button
          size="small"
          variant="outlined"
          startIcon={<VisibilityIcon />}
          onClick={() => navigate(`/orders/${params.row.id}`)}
        >
          View
        </Button>
      ),
    },
  ];

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress /></Box>;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <CardHeader
        title="Orders Management"
        subheader={`Total: ${orders.length} orders`}
        action={
          <Button variant="contained" startIcon={<GetAppIcon />} onClick={exportPdf}>
            Export PDF
          </Button>
        }
        sx={{ bgcolor: 'primary.light', color: 'white' }}
      />
      <CardContent>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={orders}
            columns={columns}
            pageSizeOptions={[5, 10, 25, 50]}
            disableSelectionOnClick
            sx={{
              '& .MuiDataGrid-columnHeaders': { bgcolor: 'primary.light', color: 'white', fontWeight: 600 },
              '& .MuiDataGrid-row:hover': { bgcolor: 'action.hover', cursor: 'pointer' },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
