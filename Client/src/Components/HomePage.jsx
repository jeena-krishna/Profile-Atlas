import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const HomePage = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProfiles = profiles.filter((profile) => {
    return Object.values(profile)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <section id="HomeSection" className="pt-10 pb-20 ">
      <div className="mx-auto max-w-7xl px-6">
        <div id="SearchBar" className="relative">
          <input
            type="text"
            placeholder="Search Profiles"
            className="border-[#090152]  border-2 py-4 px-4 rounded-2xl w-full outline-none pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div id="Profiles-section" className="relative mt-12">
          <h2 className="font-bold text-4xl mb-8">Profiles</h2>
          {filteredProfiles.length > 0 ? (
            <div className="grid grid-1-col md:grid-cols-3 lg:grid-cols-4 gap-10">
              {filteredProfiles.map((profile, index) => (
                <div key={index}>
                  <ProfileCard profile={profile} showDetails={false} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20">
              <p>No Profiles</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
