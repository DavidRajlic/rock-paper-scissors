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

  const [classVar, setClassVar] = useState("randomObjectName");
  const [randomObject, setRandomObject] = useState(rps[0]);

  // creating objects as images, adding onclick function to change border when clicked
  const objects = rps.map(object => (
    <img onClick={() => onClick(object.id)} key={object.id} className={`${object.active ? "clicked" : "notClicked"}`} src={object.img} alt="" /> 
  ));

  // choose random object from rps array  

  // when image clicked change active status from false to true
  const onClick = id => {    
    const newRPS = rps.map(object => {
      return { ...object, active: object.id === id};
    });
    setRPS(newRPS);
    setClassVar("randomObjectNamesVisual");
    const randomNum = Math.floor(Math.random() * rps.length);    
    setRandomObject(rps[randomNum]);        
  };

  // find clicked object by filtering through rps array to find which one has active status equal to true (that object was clicked)
  const clickedObject = rps.filter(object => object.active === true).map(filteredObject => (
    <div>
      <img key={filteredObject.id} className="notClicked" src={filteredObject.img} alt=""/> 
    </div> 
  ))

  const clickedName = rps.filter(id => id.active === true).map(filteredId=> (
    filteredId.name
  ))
/*
  const ROCK = clickedName[0]==="ROCK"
  const PAPER = clickedName[0]==="PAPER"
  const SCISSORS = clickedName[0]==="SCISSORS"
  console.log(ROCK)
  console.log(PAPER)
  */
 /*
  ( "ROCK" > "SCISSORS" )
  ( "ROCK" < "PAPER" )
  ( "PAPER" < "SCISSORS" )
*/
const match = (clickedName, rndName) => {
  if(clickedName === rndName) {
    console.log("DRAW")
  }
  if(clickedName >  rndName) {
    console.log("WIN")
  }
  if(clickedName < rndName) {
    console.log("LOSE")
  }
}
match(clickedName[0], randomObject.name)

/*
  if(clickedName[0] === randomObject.name ) {
    
  }

  if(clickedName[0] === "ROCK" && randomObject.name === "SCISSORS" ) {
    
  }

  if(clickedName[0] === "ROCK" && randomObject.name === "PAPER") {
    
  }
  if(clickedName[0] === "PAPER" && randomObject.name === "SCISSORS") {
    
  }

  if(clickedName[0] === "PAPER" && randomObject.name === "ROCK") {
   
  }

  if(clickedName[0] === "SCISSORS" && randomObject.name === "ROCK") {
   
  }

  if(clickedName[0] === "SCISSORS" && randomObject.name === "PAPER") {
    
  } 
*/
  return (
    <div className="containerRPS">
      <div className="objectContainer">
        <div className="objects"> {objects} </div>
      </div>
      <div className="container">
        <div className="clickedObject"> {clickedObject} </div>        
        <div className={classVar}>
         <img className='notClicked' src={randomObject.img} alt="beda"/>
        </div>
        <div>   </div>
      </div>
    </div>
  );
}

export default App;
