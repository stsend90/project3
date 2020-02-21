const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes")
const session = require("express-session");
const passport = require("./config/passport");
require("dotenv").config();


app.use(session({ secret: "developer", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};
mongoose.connect(MONGODB_URI,options);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!")
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
