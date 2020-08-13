import React, { createRef } from "react";
import "./App.css";
import { Route, MemoryRouter, useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "./components/Sidebar";


const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/projects" {...props} />
));

const App = () => {

  return (
    <div className="Container">
      {/* <div className="App-Sidebar"> */}
      <Sidebar/>
      {/* </div> */}

      {/* <div className="App-Main">
        <Projects />
        <About />
      </div> */}

      {/* <Link component={LinkBehavior} >
          Projects


          </Link> */}

{/* <Route path="/introduction">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route> */}

  
    </div>
  );
};

export default App;
