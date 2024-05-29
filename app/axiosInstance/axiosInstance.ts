import axios from "axios";

const BASE_URL_SERVER = "http://localhost:3000/api/";
const BASE_URL_CLIENT = "http://localhost:3001/api/";

export const axiosInstanceServer = axios.create({
  withCredentials: true,
  baseURL: BASE_URL_SERVER,
});

export const axiosInstanceClient = axios.create({
  withCredentials: true,
  baseURL: BASE_URL_CLIENT,
});

export const https = {
  get: axiosInstanceServer.get,
  patch: axiosInstanceServer.patch,
  post: axiosInstanceServer.post,
  delete: axiosInstanceServer.delete,
};

export const httpsClent = {
  get: axiosInstanceClient.get,
  patch: axiosInstanceClient.patch,
  post: axiosInstanceClient.post,
  delete: axiosInstanceClient.delete,
};

// if the user is not autherized
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("interceptors.response");

    if (err.response.status === 401 || err.response.data === "unauthorized") {
      window.location.replace("/sign-in");
    }
  }
);
