import React from "react";
import ProjectCard from "./ProjectCard.js"
import cedric from "../assets/images/cedric.png";

const projectList = [{
  id: 1, 
  title: "Test Title",
  image: cedric
}, 
{
  id: 2, 
  title: "Test Title",
  image: cedric
}]

const WorkProjects = (props) => {
  return (
    <div className="extra" >
      <h1 id="projects">Projects</h1>
      {projectList.map(data => (
        <ProjectCard key = {data.id} data = {data}/>
      ))}
    </div>
  );
};

export default WorkProjects;
