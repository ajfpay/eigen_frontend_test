import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constant";

export const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  return instance;
};

export const axiosInstance: AxiosInstance = createAxiosInstance();
