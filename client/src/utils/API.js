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
  addComment: function (data) {
    return axios.post(`/api/discussion/:id`, data)
  },
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
  getDiscussions: function (user) {
    return axios.get("/api/discussions", user);
  },
  onClickComment: function(id, data) {
    return axios.get(`/api/discussion/${id}`, data)
  },
  deleteDiscussion: function (data) {
    return axios.delete(`/api/discussion/:id`, data);
  },
  findUserName: function () {
    return axios.get("/api/authorized/")
  },
  savedArticles: function (article) {
    return axios.get("/api/Articles/", article)
  },
  saveArticle: function (article) {
    return axios.post("/api/Articles/", article)
  },
  deleteArticle: function (id) {
    return axios.delete("/api/Articles/" + id)
  }
};
