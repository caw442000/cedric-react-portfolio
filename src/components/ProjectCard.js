import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from '@material-ui/core/Icon';
import Link from "@material-ui/core/Link";
import HttpIcon from "@material-ui/icons/Http";
// import styled from "styled-components";

// const DrinkDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 30px;
//   align-items: center;
//   max-width: 100%;
//   flex-direction: column;
//   width: 200px;
//   height: 300px;
//   border: 1px solid;
//   padding: 10px;
//   margin: 10px;
// `;

// const DrinkImage = styled.img`
// width: 150px;
// height: 150px
// object-fit: scale;
// flex-shrink:2;

// `;

const ProjectCard = ({ data }) => {
  const { projectImg } = data.image;
  return (
    <div className="Card">
      <h2 className="CardTitle">{data.title}</h2>

      <div className="CardContent">
        <img className="CardImage" src={data.image} alt="" />
        <p className="CardText">{data.text}</p>
      </div>
      <div className="icons">
      <Link
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                >
        <GitHubIcon style = {{ fontSize: 40}}/>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
