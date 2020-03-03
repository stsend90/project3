const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");

router.post("/api/register", function(req, res) {
  console.log("registering user");

  //Do password validation here before attempting to register user, such as checking for password length, captial letters, special characters, etc.

  db.User.register(
    new db.User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/api/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/api/discussion", isAuthenticated, function (req, res) {
  db.Discussion.create({ title: req.body.title, body: req.body.body })
  .then(function(dbDiscussion) {
    return db.User.findOneAndUpdate( {_id: req.user._id}, {$push: {discussion: dbDiscussion._id}}, { new: true } )
  })
  .then(function(dbUser) {
    res.json(dbUser)
  })
  .catch(function(error) {
    console.log(error);
    res.json(error);
  })
})

router.post("/api/discussion/:id", isAuthenticated, function (req, res) {
  db.Comment.create({ title: req.body.title, body: req.body.body })
  .then(function(dbComment) {
    return db.Discussion.findOneAndUpdate( {_id: req.user._id}, {$push: {comment: dbComment._id}}, { new: true } )
  })
  .then(function(dbDiscussion) {
    res.json(dbDiscussion)
  })
  .catch(function(error) {
    console.log(error);
    res.json(error);
  })
})

router.get("/api/logout", function(req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function(req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        console.log("available username");
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/api/authorized", isAuthenticated, function(req, res) {
  res.json(req.user);
});

router.get("/api/discussion", isAuthenticated, function(req, res) {
  db.User.findOne({ _id: req.user._id })
  .populate("discussion")
  .then(function(dbDiscussion) {
    res.json(dbDiscussion);
    console.log(dbDiscussion);
    console.log(req.user.username);    
  })
  .catch(function(error) {
    res.json(err);
  });
});

// router.get("/api/discussion/:id", isAuthenticated, function(req, res) {
//   db.User.findOne({ _id: req.user._id })
//   .populate("discussion")
//   .then(function(dbDiscussion) {
//     res.json(dbDiscussion);
//     console.log(dbDiscussion);
//     console.log(req.user.username);    
//   })
//   .catch(function(error) {
//     res.json(err);
//   });
// });

router.delete("/api/discussion/:id", isAuthenticated, function(req, res) {
  db.Discussion.deleteOne({ _id: req.params._id }),
  console.log(req.params._id),
  db.User.deleteOne({ _id: req.params._id })
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(error) {
    console.log(error);
  })
  console.log("Discussion has been deleted");
})

module.exports = router;
