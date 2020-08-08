import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar.js";
import Projects from "./components/projects";
import About from "./components/about";

const App = () => {
  return (
    <div className="App">
      <div className="App-Sidebar">
        <Sidebar />
      </div>

      <div className="App-Main">
        <Projects />
        <About />
      </div>
    </div>
  );
};

export default App;
