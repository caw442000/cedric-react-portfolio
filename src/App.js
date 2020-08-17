import React, { createRef } from "react";
import "./App.css";

import { Route, MemoryRouter, useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import SideNav from "./components/SideNav";



const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/projects" {...props} />
));

const App = () => {

  return (
    <div className="App">
      <div className="Container">
        



      {/* <div className="App-Sidebar"> */}
      
      <SideNav />
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
    </div>
  );
};

export default App;
