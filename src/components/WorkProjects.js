import React from "react";
import ProjectCard from "./ProjectCard.js";
import cedric from "../assets/images/cedric.png";
import signlingo from "../assets/images/signlingo.png";
import teaching from "../assets/images/teaching.jpg";
import washing from "../assets/images/washing-dishes.jpg";
import workout from "../assets/images/workout.jpg";
import Particles from "react-particles-js";
import { Box, Typography, Grid } from "@material-ui/core";

const projectList = [
  {
    id: 1,
    title: "SignLingo",
    image: signlingo,
    github: "",
    stack: 'React | Redux | Material UI | SASS | Node | Express',
    avatar: 'S',
    text: "A mobile first web app gamififying an ASL curriculum. Built to the spec for the client, on a  remote cross functional team (6). Developed user onboarding forms using formik Material UI and SASS.",
  },
  {
    id: 2,
    title: "Better Professor App",
    image: teaching,
    github: "https://github.com/BW-A-Better-Professor-App/Better-Professor-FE/",
    stack: 'React | ContextAPI | Material UI | Node | Express',
    avatar: 'P',
    text:
      "Utilized my skills with React.js ContextAPI and CRUD to develop a frontend dashboard to tie into our backend API so a professor can keep track of their students deadlines.",
  },
  {
    id: 3,
    title: "Chore Tracker App",
    image: washing,
    github: "https://github.com/Build-Week-Home-Chore-Tracker-2020/Front-End",
    stack: 'React | Redux | Material UI | Node | Express',
    avatar: 'C',
    text:
      "Used Formik and Material UI with React.js to generate a view and functionality for a frontend dashboard to allow a parent to add their children and assign chores to each child.",
  },
  {
    id: 4,
    title: "WeightLifting Journal",
    image: workout,
    github: "https://github.com/BW-Weight-Lifting-Journal-6/Marketing-Page",
    stack: 'HTML5 | CSS | LESS ',
    avatar: 'W',
    text:
      "I was tasked with utilizing my knowledge of HTML CSS and LESS to generate a multipage marketing/landing page for a group project in school",
  },
];

const WorkProjects = (props) => {
  return (
    <Box id="projects" style={{ backgroundColor: "royalblue", paddingLeft: 30 }}>
      <Typography variant="h1" style={{ textAlign: "left", color: "white" }}>
        Projects
      </Typography>
      <Grid container spacing={4} style={{margin: '0 auto', width: '1000px'}}>
        {projectList.map((data) => (
          <Grid item >
            <ProjectCard key={data.id} data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkProjects;
