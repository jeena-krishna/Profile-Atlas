const asyncHandler = require("express-async-handler");
const Profile = require("../Models/profileModel");

//@route GET /allProfiles
const getAllProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

//@route POST /createProfile
const createProfile = asyncHandler(async (req, res) => {
  const { name, address, username, interests, contactInfo, description } =
    req.body;

  if (
    !username ||
    !name ||
    !address ||
    !interests ||
    !contactInfo ||
    !description
  ) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }
  const newProfile = new Profile({
    name,
    address,
    username,
    interests,
    contactInfo,
    description,
  });

  const createdProfile = await newProfile.save();
  res.status(201).json(createdProfile);
});

//@route PUT /updateProfile/:id
const updateProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, address, username, interests, contactInfo, description } =
    req.body;

  const updatedProfile = await Profile.findByIdAndUpdate(
    id,
    {
      name,
      address,
      username,
      interests,
      contactInfo,
      description,
    },
    { new: true, runValidators: true }
  );

  if (!updatedProfile) {
    res.status(404);
    throw new Error("Profile not found");
  }
  res.status(200).json(updatedProfile);
});

//@route DELETE /deleteProfile/:id
const deleteProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findByIdAndDelete(id);

  if (!profile) {
    res.status(404);
    throw new Error("Profile not found");
  }
  res.status(200).json({ message: "Profile deleted successfully" });
});

module.exports = {
  getAllProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
