require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000/" }));

let url =
  "mongodb+srv://divyamishra075:kuchbhi@test-clusture.hmrsqil.mongodb.net/?retryWrites=true&w=majority&appName=practice";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("registration", userSchema);
app.post("/registration", async (req, res) => {
  try {
    const { RegDetails } = req.body;
    console.log(RegDetails, "regdetails");
    //encrypting password
    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(RegDetails.password, salt);

    const user = new User({ ...RegDetails, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "Registration Success" });
  } catch (err) {
    console.error(err);
  }
});
app.get("/posts", authenticateToken, async (req, res) => {
  try {
    const payload = req.authUser.username;
    console.log(payload, "before");
    const dbUser = await User.findOne({ username: payload });
    console.log(dbUser, "payload");
    if (dbUser) {
      res.status(200).json({ email: dbUser.email });
    } else {
      res.status(200).json({ message: "email not found" });
    }
  } catch (e) {
    res.status(e.status).json({ message: "posts not send" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let dbUser = await User.findOne({ username: username });
    if (!dbUser) {
      const error = new Error("User is not registered");
      error.status = 403;
      throw error;
    }
    let decrypt = await bcrypt.compare(password, dbUser.password);
    if (dbUser.username && decrypt) {
      const authUser = { username };
      const accessToken = jwt.sign(authUser, process.env.ACCESS_TOKEN_SECRET);
      console.log(accessToken, process.env.ACCESS_TOKEN_SECRET, authUser);
      res.status(200).json({
        accessToken: accessToken,
      });
    } else {
      res.status(200).json({ message: "Not verified!" });
    }
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403);
    req.authUser = user;
    next();
  });
}

app.listen(5000, () => {
  console.log("app is running");
});
