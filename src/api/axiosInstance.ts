import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://loader.to/ajax',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;