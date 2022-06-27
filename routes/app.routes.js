const express = require("express");
const router = express.Router();
const aiRoute = require("./ai.routes");

const { checkAuthorization } = require("../middleware/apiKey.validator");

router.use("/ai", checkAuthorization, aiRoute);

module.exports = router;
