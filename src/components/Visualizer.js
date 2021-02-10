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
    //updates state usin
    if (event.code === "KeyA") {
      setCNote(true);
      let audio = new Audio();
      audio.src = require('../assets/A3.mp3')
      audio.play();
    }

    if (event.code === "KeyW") {
      setCsharpNote(true);
    }

    if (event.code === "KeyS") {
      setDNote(true);
    }

    if (event.code === "KeyE") {
      setDsharpNote(true);
    }

    if (event.code === "KeyD") {
      setENote(true);
    }

    if (event.code === "KeyF") {
      setFNote(true);
    }

    if (event.code === "KeyT") {
      setFsharpNote(true);
    }

    if (event.code === "KeyG") {
      setGNote(true);
    }

    if (event.code === "KeyY") {
      setGsharpNote(true);
    }

    if (event.code === "KeyH") {
      setANote(true);
    }

    if (event.code === "KeyU") {
      setAsharpNote(true);
    }

    if (event.code === "KeyJ") {
      setBNote(true);
    }

    if (event.code === "KeyK") {
      setHighCNote(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === "KeyA") {
      setCNote(false);
    }

    if (event.code === "KeyW") {
      setCsharpNote(false);
    }

    if (event.code === "KeyS") {
      setDNote(false);
    }

    if (event.code === "KeyE") {
      setDsharpNote(false);
    }

    if (event.code === "KeyD") {
      setENote(false);
    }

    if (event.code === "KeyF") {
      setFNote(false);
    }

    if (event.code === "KeyT") {
      setFsharpNote(false);
    }

    if (event.code === "KeyG") {
      setGNote(false);
    }

    if (event.code === "KeyY") {
      setGsharpNote(false);
    }

    if (event.code === "KeyH") {
      setANote(false);
    }

    if (event.code === "KeyU") {
      setAsharpNote(false);
    }

    if (event.code === "KeyJ") {
      setBNote(false);
    }

    if (event.code === "KeyK") {
      setHighCNote(false);
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
      <div id="circleContainer">
        <ACircle />
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
