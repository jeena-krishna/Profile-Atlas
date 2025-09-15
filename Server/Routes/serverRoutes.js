const express = require("express");
const router = express.Router();
const {
  getAllProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} = require("../Controllers/serverControllers");

router.route("/").get(getAllProfiles).post(createProfile);
router.route("/:id").put(updateProfile).delete(deleteProfile);

module.exports = router;
