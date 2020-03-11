const passport = require("passport");
const express = require("express");
const path = require("path");
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
    return db.User.findOneAndUpdate( { _id: req.user._id }, {$push: {discussion: dbDiscussion._id}}, { new: true } )
  })
  .then(function(dbUser) {
    res.json(dbUser)
  })
  .catch(function(err) {
    console.log(err);
    res.json(err);
  })
})

router.post("/api/discussion/:id", isAuthenticated, function (req, res) {
  db.Comment.create({ body: req.body.body })
  .then(function(dbComment) {
    return db.User.findOneAndUpdate( { _id: req.user._id }, {$push: {comment: dbComment._id}}, { new: true } )
  })
  .then(function(dbUser) {
    res.json(dbUser)
  })
  .catch(function(err) {
    res.json(err);
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

router.get("/api/discussions", isAuthenticated, function(req, res) {
  db.Discussion.find({})
  .then(function(dbUser){
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err)
  });
});

router.get("/api/discussion", isAuthenticated, function(req, res) {
  db.User.findOne({ _id: req.user._id })
  .populate("discussion")
  .then(function(dbDiscussion) {
    res.json(dbDiscussion);
    console.log(dbDiscussion);   
  })
  .catch(function(err) {
    res.json(err);
  });
});

router.get("/api/discussion/:id", isAuthenticated, function(req, res) {
  db.Discussion.findOne({ _id: req.params.id })
  .populate("Comment")
  .then(function(dbDiscussion) {
    res.json(dbDiscussion);
    console.log(dbDiscussion);
  })
  .catch(function(err) {
    res.json(err);
  });
});

router.delete("/api/discussion/:id", isAuthenticated, function(req, res) {
  db.Discussion.deleteOne({ _id: req.params._id }),
  console.log(req.params._id)
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(err) {
    console.log(err);
  })
  console.log("Discussion has been deleted");
})

router.post("/api/Articles/", isAuthenticated, function (req, res) {
  console.log(req.body);
  db.Articles.findOneAndUpdate({ title: req.body.title, url: req.body.url })
  .then(function(dbArticle) {
    return db.User.findOneAndUpdate( {_id: req.user._id}, {$push: {article: dbArticle._id}}, { new: true } )
  })
  .then(function(dbUser) {
    res.json(dbUser)
  })
  .catch(function(error) {
    console.log(error);
    res.json(error);
  })
})

router.get("/api/Articles", isAuthenticated, function(req, res) {
  db.User.findOne({ _id: req.user._id })
  .populate("article")
  .then(function(dbArticle) {
    res.json(dbArticle);
    console.log(dbArticle);    
  })
  .catch(function(err) {
    res.json(err);
  });
});

router.get("/api/Articles/:id", isAuthenticated, function(req, res) {
  db.User.findOne({ _id: req.user._id })
  .populate("article")
  .then(function(dbArticle) {
    res.json(dbArticle);
    console.log(dbArticle);   
  })
  .catch(function(err) {
    res.json(err);
  });
});

router.delete("/api/Articles/:id", isAuthenticated, function(req, res) {
  db.Articles.deleteOne({ _id: req.params._id }),
  console.log(req.params._id),
  db.User.deleteOne({ _id: req.params._id })
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(error) {
    console.log(error);
  })
  console.log("Article has been deleted");
})

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

module.exports = router;
