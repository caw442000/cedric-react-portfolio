import React from "react";
import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'

const Introduction = (props) => {
  return (
    <div className='Introduction' id = "introduction">
      <div className = 'text'>


      <h1 style={{textAlign:'left', color:'white',
            // position: "absolute",
            // top: 0,
            // left: 0,
            // width: "100%",
            // height: "100%"
          }}>About</h1>
          <h1 style={{textAlign:'left', color:'white', marginTop:'5%'
          }}>Hi, I am Cedric Winbush
I am a full stack web developer.</h1>
      </div>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": .5,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        // "events": {
	        //     "onhover": {
	        //         "enable": true,
	        //         "mode": "bubble"
	        //     },
	        //     "onclick": {
	        //         "enable": true,
	        //         "mode": "repulse"
	        //     }
	        // },
	        // "modes": {
	        //     "bubble": {
	        //         "distance": 250,
	        //         "duration": 4,
	        //         "size": 0,
	        //         "opacity": 0
	        //     },
	        //     "repulse": {
	        //         "distance": 400,
	        //         "duration": 4
	        //     }
	        // }
	    }
	}} />

    </div>
  );
};

export default Introduction;
