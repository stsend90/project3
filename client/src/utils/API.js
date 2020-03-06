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
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  // addComment: function (discussions, comment) {
  //   return axios.get(`/api/comment/${discussions._id}`, comment)
  // },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  getDiscussion: function () {
    return axios.get("/api/discussion");
  },
  getOneDiscussion: function (id) {
    return axios.get(`/api/discussion/${id}`);
  },
  deleteDiscussion: function (id) {
    return axios.delete(`/api/discussion/:id`, id);
  },
  findUserName: function () {
    return axios.get("/api/authorized/")
  },
  savedArticles: function (article) {
    return axios.get("/api/Articles/", article)
  },
  saveArticle: function (article) {
    return axios.post("/api/Articles/", article)
  }
};
