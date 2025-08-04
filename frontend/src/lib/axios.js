import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "https://plan-it-backend.onrender.com/api/tasks",
});

export default api;



//http://localhost:3000/api/tasks