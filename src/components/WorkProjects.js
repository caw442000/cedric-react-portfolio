import React from "react";
import ProjectCard from "./ProjectCard.js"
import cedric from "../assets/images/cedric.png";
import teaching from "../assets/images/teaching.jpg";
import washing from "../assets/images/washing-dishes.jpg";
import workout from "../assets/images/workout.jpg";
import Particles from 'react-particles-js';


const projectList = [{
  id: 1, 
  title: "SignLingo",
  image: cedric,
  github: "",
  text: "A mobile first web app for teaching a gamified ASL curriculum Built to the specifications of the client, on  a cross-country cross-functional team of 6. Functioned as a Front-end Developer Focused on creating Login and Signup forms using formik and styling them with Material UI and SASS"
}, 
{
  id: 2, 
  title: "Better Professor App",
  image: teaching, 
  github: "https://github.com/BW-A-Better-Professor-App/Better-Professor-FE/",
  text: "Utilized my skills with React.js ContextAPI and CRUD to develop a frontend dashboard to tie into our backend API so a professor can keep track of their students deadlines."
},
{
  id: 3, 
  title: "Chore Tracker App",
  image: washing,
  github: "https://github.com/Build-Week-Home-Chore-Tracker-2020/Front-End",
  text: "Used Formik and Material UI with React.js to generate a view and functionality for a frontend dashboard to allow a parent to add their children and assign chores to each child."
}, 
{
  id: 4, 
  title: "Better WeightLifting Journal",
  image: workout, 
  github: "https://github.com/BW-Weight-Lifting-Journal-6/Marketing-Page",
  text: "I was tasked with utilizing my knowledge of HTML CSS and LESS to generate a multipage marketing page for a group project in school"
},


]



const WorkProjects = (props) => {

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };

  return (
    
    <div id="projects" className="Extra" >
      <h1 style={{textAlign:'left'}} >Projects</h1>
  

      <div className = "CardList">

      {projectList.map(data => (
        <ProjectCard key = {data.id} data = {data}/>
      ))}

      </div>
 
      
    </div>
  );
};

export default WorkProjects;
