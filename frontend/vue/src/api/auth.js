import axios from "axios";

export default {
  login(email, password) {
    return axios.get("http://localhost:8000/auth/login/", {
      params: { email: email, password: password },
    });
  },
  getUsers() {
    return axios.get("http://localhost:8000/auth/users/");
  },
  getTasks() {
    return axios.get("http://localhost:8000/auth/tasks/");
  }
};
