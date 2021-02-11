import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  ACircle,
  WCircle,
  SCircle,
  ECircle,
  DCircle,
  FCircle,
  TCircle,
  GCircle,
  YCircle,
  HCircle,
  UCircle,
  JCircle,
  KCircle,
} from "./shapes/circles";
import "../styles.css";

// all the components wee need for the visualizer to work will live on this compnent
// base on the value of the state, it will render the value of the key of the obj
// the state gets updated every time a new key is pressed
// updates state usinh setShapes; pass the new value of state in an array

function Visualizer() {
  const [CNote, setCNote] = useState(false); // a
  const [CsharpNote, setCsharpNote] = useState(false); // w
  const [DNote, setDNote] = useState(false); // s
  const [DsharpNote, setDsharpNote] = useState(false); // e
  const [ENote, setENote] = useState(false); // d
  const [FNote, setFNote] = useState(false); // f
  const [FsharpNote, setFsharpNote] = useState(false); // t
  const [GNote, setGNote] = useState(false); // g
  const [GsharpNote, setGsharpNote] = useState(false); // y
  const [ANote, setANote] = useState(false); // h
  const [AsharpNote, setAsharpNote] = useState(false); // u
  const [BNote, setBNote] = useState(false); // j
  const [highCNote, setHighCNote] = useState(false); // k

  

  const handleKeyDown = (event) => {
    //updates state using
    if (event.code === "KeyA") {
      setCNote(true);
      document.getElementById("C3").play()
    }

    if (event.code === "KeyW") {
      setCsharpNote(true);
      document.getElementById("C3Sharp").play()
      
    }

    if (event.code === "KeyS") {
      setDNote(true);
      document.getElementById("D3").play()
    }

    if (event.code === "KeyE") {
      setDsharpNote(true);
      document.getElementById("D3Sharp").play()
    }

    if (event.code === "KeyD") {
      setENote(true);
      document.getElementById("E3").play()
    }

    if (event.code === "KeyF") {
      setFNote(true);
      document.getElementById("F3").play()
    }

    if (event.code === "KeyT") {
      setFsharpNote(true);
      document.getElementById("F3Sharp").play()
    }

    if (event.code === "KeyG") {
      setGNote(true);
      document.getElementById("G3").play()
    }

    if (event.code === "KeyY") {
      setGsharpNote(true);
      document.getElementById("G3Sharp").play()
    }

    if (event.code === "KeyH") {
      setANote(true);
      document.getElementById("A3").play()
    }

    if (event.code === "KeyU") {
      setAsharpNote(true);
      document.getElementById("A3Sharp").play()
    }

    if (event.code === "KeyJ") {
      setBNote(true);
      document.getElementById("B3").play()
    }

    if (event.code === "KeyK") {
      setHighCNote(true);
      document.getElementById("C4").play()
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === "KeyA") {
      setCNote(false);
      document.getElementById("C3").pause()
      document.getElementById("C3").currentTime = 0
    }

    if (event.code === "KeyW") {
      setCsharpNote(false);
      document.getElementById("C3Sharp").pause()
      document.getElementById("C3Sharp").currentTime = 0
    }

    if (event.code === "KeyS") {
      setDNote(false);
      document.getElementById("D3").pause()
      document.getElementById("D3").currentTime = 0
    }

    if (event.code === "KeyE") {
      setDsharpNote(false);
      document.getElementById("D3Sharp").pause()
      document.getElementById("D3Sharp").currentTime = 0
    }

    if (event.code === "KeyD") {
      setENote(false);
      document.getElementById("E3").pause()
      document.getElementById("E3").currentTime = 0
    }

    if (event.code === "KeyF") {
      setFNote(false);
      document.getElementById("F3").pause()
      document.getElementById("F3").currentTime = 0
    }

    if (event.code === "KeyT") {
      setFsharpNote(false);
      document.getElementById("F3Sharp").pause()
      document.getElementById("F3Sharp").currentTime = 0
    }

    if (event.code === "KeyG") {
      setGNote(false);
      document.getElementById("G3").pause()
      document.getElementById("G3").currentTime = 0
    }

    if (event.code === "KeyY") {
      setGsharpNote(false);
      document.getElementById("G3Sharp").pause()
      document.getElementById("G3Sharp").currentTime = 0
    }

    if (event.code === "KeyH") {
      setANote(false);
      document.getElementById("A3").pause()
      document.getElementById("A3").currentTime = 0
    }

    if (event.code === "KeyU") {
      setAsharpNote(false);
      document.getElementById("A3Sharp").pause()
      document.getElementById("A3Sharp").currentTime = 0
    }

    if (event.code === "KeyJ") {
      setBNote(false);
      document.getElementById("B3").pause()
      document.getElementById("B3").currentTime = 0
    }

    if (event.code === "KeyK") {
      setHighCNote(false);
      document.getElementById("C4").pause()
      document.getElementById("C4").currentTime = 0
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp)

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  return (
    <div id="container">

      <audio id="C3" src="./src/assets/C3.mp3"></audio>
      <audio id="C3Sharp" src="./src/assets/C3Sharp.mp3"></audio>
      <audio id="D3" src="./src/assets/D3.mp3"></audio>
      <audio id="D3Sharp" src="./src/assets/D3Sharp.mp3"></audio>
      <audio id="E3" src="./src/assets/E3.mp3"></audio>
      <audio id="F3" src="./src/assets/F3.mp3"></audio>
      <audio id="F3Sharp" src="./src/assets/F3Sharp.mp3"></audio>
      <audio id="G3" src="./src/assets/G3.mp3"></audio>
      <audio id="G3Sharp" src="./src/assets/G3Sharp.mp3"></audio>
      <audio id="A3" src="./src/assets/A3.mp3"></audio>
      <audio id="A3Sharp" src="./src/assets/A3Sharp.mp3"></audio>
      <audio id="B3" src="./src/assets/B3.mp3"></audio>
      <audio id="C4" src="./src/assets/C4.mp3"></audio>
      
      <div id="circleContainer">  
        <div>
          {{
            true: <ACircle />
          }[CNote]}
        </div>
        <div>
          {{
            true: <WCircle />
          }[CsharpNote]}
        </div>
        <div>
          {{
            true: <SCircle />
          }[DNote]}
        </div>
        <div>
          {{
            true: <ECircle />
          }[DsharpNote]}
        </div>
        <div>
          {{
            true: <DCircle />
          }[ENote]}
        </div>
        <div>
          {{
            true: <FCircle />
          }[FNote]}
        </div>
        <div>
          {{
            true: <TCircle />
          }[FsharpNote]}
        </div>
        <div>
          {{
            true: <GCircle />
          }[GNote]}
        </div>
        <div>
          {{
            true: <YCircle />
          }[GsharpNote]}
        </div>
        <div>
          {{
            true: <HCircle />
          }[ANote]}
        </div>
        <div>
          {{
            true: <UCircle />
          }[AsharpNote]}
        </div>
        <div>
          {{
            true: <JCircle />
          }[BNote]}
        </div>
        <div>
          {{
            true: <KCircle />
          }[highCNote]}
        </div>
      </div>
    </div>
  );
}

//import { ACircle, WCircle, SCircle, ECircle, DCircle, FCircle, TCircle, UCircle, JCircle, KCircle } from './shapes/circles';

export default connect(
  null,
  {} //pass in actions here
)(Visualizer);
