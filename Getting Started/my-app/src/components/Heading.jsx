import React from 'react';


function Heading(){
const date = new Date(2025, 1, 1, 19);
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "" 
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red"; // Set the color to red
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green"; // Set the color to green
} else {
  greeting = "Good Night";
  customStyle.color = "blue"; // Set the color to blue
}



return <h1 className='heading' style={customStyle}>{greeting}</h1>

}


export default Heading;