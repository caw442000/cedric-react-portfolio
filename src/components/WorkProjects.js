import React from "react";
import ProjectCard from "./ProjectCard.js"
import cedric from "../assets/images/cedric.png";
import Particles from 'react-particles-js';


const projectList = [{
  id: 1, 
  title: "Test Title",
  image: cedric
}, 
{
  id: 2, 
  title: "Test Title",
  image: cedric
},
{
  id: 3, 
  title: "Test Title",
  image: cedric
}, 
{
  id: 4, 
  title: "Test Title",
  image: cedric
},
{
  id: 5, 
  title: "Test Title",
  image: cedric
}, 
{
  id: 6, 
  title: "Test Title",
  image: cedric
},
{
  id: 7, 
  title: "Test Title",
  image: cedric
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
