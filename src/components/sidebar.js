import React from "react";
import cedric from "../assets/images/cedric.png";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="Profile-Image-Wrap">
        <img className = "Profile-Image" src={cedric} alt="Cedric Profile Picture" />
      </div>

      <h1>Cedric Winbush</h1>
      <p>cawinbushjr@gmail.com</p>
      <nav>
        <nav-item>Introduction</nav-item>
        <nav-item>About</nav-item>
        <nav-item>Timeline</nav-item>
      </nav>
    </div>
  );
};

export default Sidebar;
