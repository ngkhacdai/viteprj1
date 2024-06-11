import axios from "axios";

export const API = "https://dai.tongdaihoidap.com";

const instance = axios.create({
  baseURL: `${API}/v1/api`,
});

instance.interceptors.request.use(
  function (config) {
    config.headers["x-xclient-id"] = localStorage.getItem("userID");
    config.headers["authorization"] = localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    window.location.href = "/login";
    return Promise.reject(error);
  }
);

export default instance;
