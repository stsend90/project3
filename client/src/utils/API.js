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
  addComment: function (discussion, comment) {
    return axios.get(`/api/comment/${discussion._id}`, comment)
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  getDiscussion: function () {
    return axios.get("/api/discussion");
  },
  getOneDiscussion: function (discussions, user) {
    return axios.get(`/api/discussion/${discussions}`, user);
  },
  deleteDiscussion: function (discussions, user) {
    return axios.delete(`/api/discussion/${discussions}`, user);
  },
  findUserName: function () {
    return axios.get("/api/authorized/")
  }
};
