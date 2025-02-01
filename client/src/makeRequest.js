import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:1337/api";

export const makeRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

makeRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
