import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import CommentSection from "./pages/CommentSection";
import Profile from "./pages/Profile"
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false,
    singleComment: {}
  };

  componentDidMount() {
    this.isAuthorized();
  }

  onClickComment = (discussion_id) => {
    API.onClickComment(discussion_id)
    .then(res => {
      return this.setState({
        post: {
          title: res.data.title,
          body: res.data.body,
          date: res.data.created,
          _id: res.data._id
        }
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({ authorized: false });
    });
  }  

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.setState({ authorized: false });
        } else {
          this.setState({ authorized: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {this.state.authorized ? (
                <Home logout={this.logout} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/login">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Register isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/discussions">
              {this.state.authorized ? (
                <Discussion logout={this.logout} onClickComment={this.onClickComment} />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/discussion/:id">
              {this.state.authorized ? (
                <CommentSection logout={this.logout} post={this.state.post} />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/profile">
              {this.state.authorized ? (
                <Profile logout={this.logout} onClickComment={this.onClickComment} />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
