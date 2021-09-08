import axios from "axios";

export const axiosInstance = axios.create({
  baseURL : "https://tech-diary.herokuapp.com/api/"
})