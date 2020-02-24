const bcrypt = require("bcryptjs");
const router = require("express").Router();

const authRouter = require("./auth-router.js");
const usersRouter = require("./users-router.js");
const restricted = require("../middleware/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);

router.get("/hash", (req, res) => {
  const authentication = req.headers.authentication;

  const hash = bcrypt.hashSync(authentication, 8);

  res.json({ originalValue: authentication, hashedValue: hash });
});

router.get("/", (req, res) => {
  res.json({ api: "Returned from the api router!" });
});

module.exports = router;
