import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  submit: function (data) {
    return axios.post("/api/discussion", data);
  },
  // submit: function (data) {
  //   return axios.post("/api/discussion/:_id", data);
  // },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  getDiscussion: function () {
    return axios.get("/api/discussion");
  },
  getComment: function () {
    return axios.get("/api/discussion/:id");
  },
  // getDiscussion: function () {
  //   return axios.get("/api/discussion/:_id");
  // },
  deleteDiscussion: function (id) {
    return axios.delete("/api/discussion/" + id);
  },
  findUserName: function () {
    return axios.get("/api/authorized/")
  }
};
