import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '', // proxy in package.json during dev
  headers: { 'Content-Type': 'application/json' }
});

export default api;
