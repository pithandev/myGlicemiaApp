const glicemiaController = require("../controllers/glicemiaController");
const express = require("express");
const router = express.Router();


router.get("/", glicemiaController.addController_get);
router.post("/", glicemiaController.addController_post);

module.exports = router;