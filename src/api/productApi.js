import axiosInstance from './axios';

export const fetchAllProducts = async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const fetchDashboardStats = async () => {
  const response = await axiosInstance.get('/products/stats');
  return response.data;
};
