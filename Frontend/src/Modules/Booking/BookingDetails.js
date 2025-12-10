import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Package, DollarSign, User, Phone, Mail, CheckCircle, XCircle, Truck, Home } from 'lucide-react';

const BookingDetails = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([
    {
      id: 'BK001',
      customerName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 234-567-8900',
      pickupAddress: '123 Main St, Apt 4B, New York, NY 10001',
      deliveryAddress: '123 Main St, Apt 4B, New York, NY 10001',
      pickupDate: '2024-12-15',
      pickupTime: '10:00 AM',
      deliveryDate: '2024-12-17',
      deliveryTime: '3:00 PM',
      status: 'picked-up',
      items: [
        { name: 'Shirts', quantity: 5, price: 15 },
        { name: 'Pants', quantity: 3, price: 18 },
        { name: 'Bedsheets', quantity: 2, price: 20 }
      ],
      specialInstructions: 'Please use hypoallergenic detergent',
      totalAmount: 53,
      paymentStatus: 'paid'
    },
    {
      id: 'BK002',
      customerName: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1 234-567-8901',
      pickupAddress: '456 Oak Ave, Brooklyn, NY 11201',
      deliveryAddress: '456 Oak Ave, Brooklyn, NY 11201',
      pickupDate: '2024-12-16',
      pickupTime: '2:00 PM',
      deliveryDate: '2024-12-18',
      deliveryTime: '11:00 AM',
      status: 'pending',
      items: [
        { name: 'Dresses', quantity: 2, price: 25 },
        { name: 'Suits', quantity: 1, price: 30 }
      ],
      specialInstructions: 'Handle with care - delicate fabrics',
      totalAmount: 55,
      paymentStatus: 'pending'
    },
    {
      id: 'BK003',
      customerName: 'Mike Johnson',
      email: 'mike.j@email.com',
      phone: '+1 234-567-8902',
      pickupAddress: '789 Pine Rd, Queens, NY 11375',
      deliveryAddress: '789 Pine Rd, Queens, NY 11375',
      pickupDate: '2024-12-14',
      pickupTime: '9:00 AM',
      deliveryDate: '2024-12-16',
      deliveryTime: '4:00 PM',
      status: 'delivered',
      items: [
        { name: 'Towels', quantity: 8, price: 24 },
        { name: 'Jeans', quantity: 4, price: 20 }
      ],
      specialInstructions: 'None',
      totalAmount: 44,
      paymentStatus: 'paid'
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'picked-up': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'out-for-delivery': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="w-5 h-5" />;
      case 'cancelled': return <XCircle className="w-5 h-5" />;
      case 'picked-up': return <Truck className="w-5 h-5" />;
      case 'out-for-delivery': return <Truck className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
    if (selectedBooking?.id === bookingId) {
      setSelectedBooking({ ...selectedBooking, status: newStatus });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Booking Management</h1>
          <p className="text-gray-600">View and manage all laundry pickup and delivery bookings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bookings List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">All Bookings</h2>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    onClick={() => setSelectedBooking(booking)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedBooking?.id === booking.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{booking.id}</p>
                        <p className="text-sm text-gray-600">{booking.customerName}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {booking.pickupDate}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-gray-700">${booking.totalAmount}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        booking.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {booking.paymentStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="lg:col-span-2">
            {selectedBooking ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Booking #{selectedBooking.id}</h2>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedBooking.status)}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                        {selectedBooking.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">${selectedBooking.totalAmount}</p>
                    <p className={`text-sm ${
                      selectedBooking.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      Payment: {selectedBooking.paymentStatus}
                    </p>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500">Name</p>
                        <p className="font-medium text-gray-800">{selectedBooking.customerName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="font-medium text-gray-800">{selectedBooking.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="font-medium text-gray-800">{selectedBooking.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup & Delivery Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Truck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-800">Pickup Details</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                        <p className="text-sm text-gray-700">{selectedBooking.pickupAddress}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-700">{selectedBooking.pickupDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-700">{selectedBooking.pickupTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Home className="w-5 h-5 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-800">Delivery Details</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                        <p className="text-sm text-gray-700">{selectedBooking.deliveryAddress}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-700">{selectedBooking.deliveryDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-700">{selectedBooking.deliveryTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Items</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Item</th>
                          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Quantity</th>
                          <th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedBooking.items.map((item, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="px-4 py-3 text-gray-800">{item.name}</td>
                            <td className="px-4 py-3 text-center text-gray-800">{item.quantity}</td>
                            <td className="px-4 py-3 text-right text-gray-800">${item.price}</td>
                          </tr>
                        ))}
                        <tr className="bg-gray-50 font-semibold">
                          <td className="px-4 py-3 text-gray-800" colSpan="2">Total</td>
                          <td className="px-4 py-3 text-right text-blue-600">${selectedBooking.totalAmount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Special Instructions */}
                {selectedBooking.specialInstructions && selectedBooking.specialInstructions !== 'None' && (
                  <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Special Instructions</h3>
                    <p className="text-sm text-gray-700">{selectedBooking.specialInstructions}</p>
                  </div>
                )}

                {/* Status Update Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => updateBookingStatus(selectedBooking.id, 'picked-up')}
                    disabled={selectedBooking.status === 'delivered' || selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Mark as Picked Up
                  </button>
                  <button
                    onClick={() => updateBookingStatus(selectedBooking.id, 'processing')}
                    disabled={selectedBooking.status === 'delivered' || selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Mark as Processing
                  </button>
                  <button
                    onClick={() => updateBookingStatus(selectedBooking.id, 'out-for-delivery')}
                    disabled={selectedBooking.status === 'delivered' || selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Out for Delivery
                  </button>
                  <button
                    onClick={() => updateBookingStatus(selectedBooking.id, 'delivered')}
                    disabled={selectedBooking.status === 'delivered' || selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Mark as Delivered
                  </button>
                  <button
                    onClick={() => updateBookingStatus(selectedBooking.id, 'cancelled')}
                    disabled={selectedBooking.status === 'delivered' || selectedBooking.status === 'cancelled'}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">Select a booking to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;