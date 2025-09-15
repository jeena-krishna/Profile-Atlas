import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";
import Footer from "./Components/Footer";
import AdminComponent from "./Components/AdminComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profiles");
        setProfiles(response.data);
      } catch (err) {
        console.log("error in Fetching profiles", err);
      }
    };

    fetchProfiles();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route
            path="/:username"
            element={<ProfilePage profiles={profiles} />}
          />
          <Route
            path="/admin"
            element={<AdminComponent profiles={profiles} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
