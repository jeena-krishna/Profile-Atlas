import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || 'https://profile-atlas-backend.onrender.com';


const AdminComponent = ({ profiles }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const [profileToUpdate, setProfileToUpdate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    username: "",
    interests: ["", "", ""],
    contactInfo: "",
    description: "",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsUpdateFormVisible(false);
    setProfileToUpdate(null);
    setFormData({
      name: "",
      address: "",
      username: "",
      interests: ["", "", ""],
      contactInfo: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterestChange = (index, e) => {
    const newInterests = [...formData.interests];
    newInterests[index] = e.target.value;
    setFormData({
      ...formData,
      interests: newInterests,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/profiles`, formData);
      setIsFormVisible(false);
      window.location.reload();
    } catch (err) {
      console.log("Error in creating profile: ", err);
    }
  };

  const handleUpdateClick = (profile) => {
    setProfileToUpdate(profile);
    setIsUpdateFormVisible(true);
    setIsFormVisible(false);
    setFormData(profile);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/profiles/${profileToUpdate._id}`, formData);
      setIsUpdateFormVisible(false);
      setProfileToUpdate(null);
      window.location.reload();
    } catch (err) {
      console.log("Error updating profile: ", err);
    }
  };

  const handleDelete = async (profileId) => {
    try {
      await axios.delete(`${API}/profiles/${profileId}`);
      window.location.reload();
    } catch (err) {
      console.log("Error in deleting profile: ", err);
    }
  };

  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div
          id="newProfile"
          className="text-center w-full p-6 border-2 border-dotted rounded-lg border-[#090152] flex flex-col gap-4 items-center cursor-pointer"
          onClick={toggleFormVisibility}
        >
          <h1 className="text-4xl font-bold">
            {isUpdateFormVisible ? "Update Profile" : "Add New Profile"}
          </h1>
          <div className="p-5 rounded-full bg-mainYellow w-14 h-14 flex justify-center items-center">
            <i className="fa-solid fa-plus text-2xl"></i>
          </div>
        </div>

        {(isFormVisible || isUpdateFormVisible) && (
          <div className="mt-8 p-6 border-2 border-[#090152] rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">
              {isUpdateFormVisible ? "Update Profile Form" : "New Profile Form"}
            </h2>
            <form
              onSubmit={isUpdateFormVisible ? handleUpdateSubmit : handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter profile name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Interests</label>
                {formData.interests.map((interest, index) => (
                  <input
                    key={index}
                    type="text"
                    value={interest}
                    onChange={(e) => handleInterestChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg mb-2"
                    placeholder={`Interest ${index + 1}`}
                  />
                ))}
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Contact Info
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter description"
                />
              </div>
              <button
                type="submit"
                id="button1"
                className="font-medium text-sm w-full border-2 py-2 border-[#090152] rounded-lg"
              >
                {isUpdateFormVisible ? "Update Profile" : "Submit Profile"}
              </button>
            </form>
          </div>
        )}

        <div id="existing-Profiles" className="mt-10">
          <h2 className="font-bold text-4xl mb-8">Profiles</h2>
          {profiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {profiles.map((profile, index) => (
                <div key={index}>
                  <ProfileCard profile={profile} showDetails={true} />
                  <div className="mt-3 flex items-center justify-around">
                    <button
                      className="bg-red-500 p-2 rounded-lg"
                      onClick={() => handleDelete(profile._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      className="bg-blue-500 p-2 rounded-lg"
                      onClick={() => handleUpdateClick(profile)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20">
              <p>No Profile Available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminComponent;
