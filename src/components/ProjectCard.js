import React from "react";
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
  const { projectImg } = data.image
  return (
    <div className = "Card">
      <img  className = "CardImage" src={data.image} alt="" />
      <h2>{data.title}</h2>
      
    </div>
  );
};

export default ProjectCard;
