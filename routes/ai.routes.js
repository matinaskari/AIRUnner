const express = require("express");
const router = express.Router();

const { aiController } = require("../controller/ai.controller");

router.post("/", aiController);

module.exports = router;
