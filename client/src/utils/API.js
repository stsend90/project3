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
  addComment: function (discussions, comment) {
    return axios.get(`/api/comment/${discussions.id}`, comment)
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
  deleteDiscussion: function (id) {
    return axios.delete(`/api/discussion/:id`, id);
  },
  findUserName: function () {
    return axios.get("/api/authorized/")
  },
  savedArticles: function () {
    return axios.get("/api/Articles/")
  },
  saveArticle: function (article) {
    return axios.post("/api/Articles/", article)
  }
};
