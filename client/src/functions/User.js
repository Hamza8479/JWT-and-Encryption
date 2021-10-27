import axios from "axios";

// register
export const AddUser = async (data) => {
  return await axios.post("http://localhost:8000/api/signup", data, {
    headers: { "Content-Type": "application/json" },
  });
};

// login
export const loginUser = async (email, password) => {
  return await axios.post(
    "http://localhost:8000/api/signin",
    { email, password },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
