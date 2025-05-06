import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000", // your backend API base
  headers: {
    "Content-Type": "application/json",
  },
});
