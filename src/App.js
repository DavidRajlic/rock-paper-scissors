import './App.css';
import rock from '../src/images/rock.png'
import scissors from '../src/images/scissors.jpg'
import paper from '../src/images/paper.jpg'
import { useState } from 'react';


function App() {
  // rps = rock paper scissors
const [rps, setRPS] = useState([
  { 
    id: 1,
    name: "ROCK",
    img: rock,
    active: false
  },

  {
    id: 2,
    name: "PAPER",
    img: paper,
    active: false
  },

  {
    id: 3,
    name: "SCISSORS",
    img: scissors,
    active: false
  }
]);

const [className, setClassName] = useState("randomObjectName");

// creating objects as images, adding onclick function to change border when clicked
const objects = rps.map(object => (
 <img onClick={() => onClick(object.id)} className={`${object.active ? "clicked" : "notClicked"}`} src={object.img} alt="" /> 

));

const objectName = rps.map(object => (
  <div> {object.name} </div>
  ));

// choose random object from rps array
const randomObjects = objects[Math.floor(Math.random() * objects.length)];
console.log(randomObjects.id)
const randomObjectName = objectName[Math.floor(Math.random() * objectName.length)];

// when image clicked change active status from false to true
const onClick = id => {
  const newRPS = rps.map(object => {
    return { ...object, active: object.id === id};
  });
  setRPS(newRPS);
  setClassName("randomObjectNamesVisual")
};

// find clicked object by filtering through rps array to find which one has active status equal to true (that object was clicked)
const clickedObject = rps.filter(object => object.active === true).map(filteredObject => (
  <div>
    {filteredObject.name}
  </div> 
))

  return (
    <div>
      <div className="objectContainer">
      <div className="objects"> {objects} </div>
      </div>
       <div className="randomObject"> {randomObjects} </div>
       <div className="container">
       <div className="clickedObject"> {clickedObject} </div>
       <div className={className}> {randomObjectName} </div>
       </div>
       
    </div>
    
  );
}

export default App;
