import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const fetchAllProducts = async () => {
  const { data } = await axios.get(`${API_BASE}/products`);
  return data;
};

export const fetchSingleProduct = async (id) => {
  const { data } = await axios.get(`${API_BASE}/products/${id}`);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${API_BASE}/products/categories`);
  return data;
};
