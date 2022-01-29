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
      beats: "SCISSORS",
      loses: "PAPER",
      active: false
    },

    {
      id: 2,
      name: "PAPER",
      img: paper,
      beats: "ROCK",
      loses: "SCISSORS",
      active: false
    },

    {
      id: 3,
      name: "SCISSORS",
      img: scissors,
      beats: "PAPER",
      loses: "ROCK",
      active: false
    }
  ]);  

  const [classVar, setClassVar] = useState("randomObjectName");
  const [randomObject, setRandomObject] = useState(rps[0]);
  const [result, setResult] = useState();

  // creating objects as images, adding onclick function to change border when clicked
  const objects = rps.map(object => (
    <img onClick={() => onClick(object.id)} key={object.id} className={`${object.active ? "clicked" : "notClicked"}`} src={object.img} alt="" /> 
  ));

  // when image clicked change active status from false to true
  const onClick = id => {    
    const newRPS = rps.map(object => {
      return { ...object, active: object.id === id};
    });
    setRPS(newRPS);
    setClassVar("randomObjectNamesVisual");
    const randomNum = Math.floor(Math.random() * newRPS.length);    
    setRandomObject(newRPS[randomNum]);

    const clickedBeats = newRPS.filter(id => id.active === true).map(filteredId=> (
      filteredId.beats
    ));

    const clickedLoses = newRPS.filter(id => id.active === true).map(filteredId=> (
      filteredId.loses
    ));

    if(clickedBeats[0] === newRPS[randomNum].name) {
      setResult("WIN");
    }
    if(clickedLoses[0] === newRPS[randomNum].name) {
      setResult("LOSE");
    }
    if(clickedLoses[0] !== newRPS[randomNum].name && clickedBeats[0] !== newRPS[randomNum].name) {
      setResult("DRAW");
    }
  };

  // find clicked object by filtering through rps array to find which one has active status equal to true (that object was clicked)
  const clickedObject = rps.filter(object => object.active === true).map(filteredObject => (
    <div>
      <img key={filteredObject.id} className="notClicked" src={filteredObject.img} alt=""/> 
    </div> 
  ));

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
      </div>
      <div>  {result} </div>
    </div>
  );
}

export default App;
