const router = require("express").Router();

const authRouter = require("./auth-router.js");
const usersRouter = require("./users-router.js");
const restricted = require("../middleware/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/restricted/users", restricted, usersRouter);

router.get("/", (req, res) => {
  console.log(req.session);
  res.json({ api: "Returned from the api router!" });
});

module.exports = router;
