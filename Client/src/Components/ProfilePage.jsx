import React from "react";
import { useParams, Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import MapComponent from "./MapComponent";

const ProfilePage = ({ profiles }) => {
  const { username } = useParams();
  const profile = profiles.find((profile) => profile.username === username);

  return (
    <section id="Profile-Section" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-5">
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </div>
        <div className="flex flex-col md:flex md:flex-row items-start gap-10 ">
          <div id="Profilecard" className="w-full md:w-[25%]">
            <ProfileCard profile={profile} showDetails={true} />
          </div>
          <div
            id="ProfileMap"
            className="w-full md:w-[70%] h-full shadow-lg border-2 border-[#090152] overflow-scroll"
          >
            <MapComponent address={profile.address} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
