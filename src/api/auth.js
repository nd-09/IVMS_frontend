import axios from "./axios";

export const loginUser = async (payload) => {
  const response = await axios.post("auth/login", payload);
  return response.data;
};

export const registerUser = async (payload) => {
  const response = await axios.post("users", payload);
  return response.data;
};

