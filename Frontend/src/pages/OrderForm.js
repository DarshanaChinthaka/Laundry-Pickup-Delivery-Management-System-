import React, { useState } from 'react';
import api from '../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emptyItem = () => ({ name: '', quantity: 1, price: 0 });

export default function OrderForm() {
  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    pickupAddress: '',
    deliveryAddress: '',
    items: [emptyItem()],
  });

  const handleItemChange = (index, key, value) => {
    const items = [...form.items];
    items[index][key] = key === 'quantity' ? parseInt(value || '0', 10) : value;
    setForm({ ...form, items });
  };

  const addItem = () => setForm({ ...form, items: [...form.items, emptyItem()] });
  const removeItem = (i) => setForm({ ...form, items: form.items.filter((_, idx) => idx !== i) });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      await api.post('/api/orders', payload);
      toast.success('Order created');
      setForm({ customerName: '', phone: '', pickupAddress: '', deliveryAddress: '', items: [emptyItem()] });
    } catch (err) {
      console.error(err);
      toast.error('Failed to create order');
    }
  };

  return (
    <div className="card">
      <h2>Book Pickup</h2>
      <form onSubmit={submit} className="form-grid">
        <label>Customer name
          <input value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} required />
        </label>
        <label>Phone
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </label>
        <label>Pickup address
          <input value={form.pickupAddress} onChange={(e) => setForm({ ...form, pickupAddress: e.target.value })} required />
        </label>
        <label>Delivery address
          <input value={form.deliveryAddress} onChange={(e) => setForm({ ...form, deliveryAddress: e.target.value })} required />
        </label>

        <div className="items">
          <h3>Items</h3>
          {form.items.map((it, i) => (
            <div className="item-row" key={i}>
              <input placeholder="Name" value={it.name} onChange={(e) => handleItemChange(i, 'name', e.target.value)} required />
              <input type="number" min="1" placeholder="Qty" value={it.quantity} onChange={(e) => handleItemChange(i, 'quantity', e.target.value)} />
              <input type="number" step="0.01" placeholder="Price" value={it.price} onChange={(e) => handleItemChange(i, 'price', e.target.value)} />
              <button type="button" className="btn small" onClick={() => removeItem(i)} aria-label="Remove">Remove</button>
            </div>
          ))}
          <button type="button" className="btn" onClick={addItem}>Add Item</button>
        </div>

        <div className="form-actions">
          <button className="btn primary" type="submit">Submit Order</button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
}
