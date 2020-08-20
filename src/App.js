import React, { createRef } from "react";
import "./App.css";

import SideNav from "./components/SideNav";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <SideNav />
    </>
  );
};

export default App;
