import axios from "axios";
import { getCookie } from "@/utils/cookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // send sessionid cookie with every request
});

// ✅ Add CSRF token to all write requests
api.interceptors.request.use(config => {
  const method = config.method?.toUpperCase();

  if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
  }

  return config;
});

// ✅ Handle unauthorized sessions globally
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
