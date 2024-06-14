import axios from "axios";

const instance = axios.create({
  baseURL: "https://14fc-197-243-118-202.ngrok-free.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
