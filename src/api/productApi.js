import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/products';

export const fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
export const fetchAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
