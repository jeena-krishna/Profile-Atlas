import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile, showDetails = false }) => {
  const navigate = useNavigate();
  return (
    <div
      id="profile-card"
      className="border-2 border-[#090152] rounded-lg duration-300 p-3  flex flex-col gap-3 "
    >
      <div id="profile-pic" className="w-20 h-20">
        <img
          src="/profile.png"
          alt="profile img"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="text-lg font-bold">{profile.name}</h1>
      <p className="text-sm font-semibold">{profile.username}</p>
      <p className="text-sm">{profile.description}</p>
      {showDetails && (
        <p className="text-sm font-bold">
          Address:{" "}
          <span className="text-sm font-normal"> {profile.address}</span>
        </p>
      )}

      {showDetails && profile.interests.length > 0 ? (
        <>
          <p className="text-sm font-bold">Interest:</p>
          <ul>
            {profile.interests.map((interest, index) => (
              <li key={index} className="text-sm py-1">
                {interest}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {showDetails && (
        <p className="text-sm font-bold">
          Contact:{" "}
          <span className="text-sm font-normal">{profile.contactInfo}</span>
        </p>
      )}

      {!showDetails && (
        <button
          id="button1"
          className="font-medium text-sm w-1/2 border-2 py-2 border-[#090152] rounded-lg"
          onClick={() => navigate(`/${profile.username}`)}
        >
          Summary
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
