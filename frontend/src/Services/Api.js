import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

// getting all products
export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

// get single products

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// get all catgrease
export const getCategories = async() =>{
    const response = await api.get('products/categories')
    return response.data
}


export const getProductsByCategory = async (category) => {
  const response = await api.get(`products/category/${category}`)
  return response.data
}