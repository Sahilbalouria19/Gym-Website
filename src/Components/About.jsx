import React from "react";
import aboutimage from '../images/about.png';

function About(){
  return (
    <div id="about">
        <div className="about-image">
            <img src = {aboutimage} alt=''>
            </img>
        </div>
        <div className="about-text">
          <h1>Learn More About Us</h1>
          <p>A gymnasium, also known as a gym, is an indoor location for athletics. 
            The word is derived from the ancient Greek term "gymnasium".
            They are commonly found in athletic and fitness centers, and as activity and learning spaces in educational institutions. 
            "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. 
            A "gym" may include or describe adjacent open air areas as well.
            In Western countries, "gyms" (or pl: gymnasia") often describe places with indoor or outdoor 
            courts for basketball, hockey, tennis, boxing or wrestling, and with equipment and machines used for physical development
             training, or to do exercises. In many European countries, Gymnasium (and variations of the word) also can describe a
            secondary school that prepares students for higher education at a university, with or without the presence of athletic
            courts, fields, or equipment.
            </p>
          <button>Read More</button>
        </div>
    </div>
  )
}


export default About;