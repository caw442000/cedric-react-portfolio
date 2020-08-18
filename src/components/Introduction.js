import React from "react";
import Particles from "react-particles-js";
import ParticlesBg from "particles-bg";
import { Typography, Box, Grid } from "@material-ui/core";

const Introduction = (props) => {
  return (
    <Box  id="introduction">
      <Grid >
        <Typography variant= 'h1'
          style={{
            textAlign: "left",
            color: "white",
            // position: "absolute",
            // top: 0,
            // left: 0,
            // width: "100%",
            // height: "100%"
          }}
        >
          About
        </Typography>
        <Typography variant= 'h2' style={{ textAlign: "left", color: "white", marginTop: "5%" }}>
          Hi, I am Cedric Winbush I am a full stack web developer.
        </Typography>
      </Grid>
      <Particles
        height={window.outerHeight}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
    </Box>
  );
};

export default Introduction;
