import axios from "axios";

const API_BASE_URL = "http://localhost:8085/api";

export const getCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const addCategory = (category) => axios.post(`${API_BASE_URL}/categories`, category);
export const deleteCategory = (id) => axios.delete(`${API_BASE_URL}/categories/${id}`);
