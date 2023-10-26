import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default api;
