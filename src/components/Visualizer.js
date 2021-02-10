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
  const [CNote, setCNote] = useState(false);
  const [DsharpNote, setDsharpNote] = useState(false);
  const [DNote, setDNote] = useState(false);

  const handleKeyDown = (event) => {
    //updates state usin
    if (event.code === "KeyA") {
      setCNote(true);
    }

    if (event.code === "KeyW") {
      setDsharpNote(true);
    }

    if (event.code === "KeyS") {
      setDNote(true);
    }

    if (event.code === "KeyE") {
      setShapes(["e"]);
    }

    if (event.code === "KeyD") {
      setShapes(["d"]);
    }

    if (event.code === "KeyF") {
      setShapes(["f"]);
    }

    if (event.code === "KeyT") {
      setShapes(["t"]);
    }

    if (event.code === "KeyG") {
      setShapes(["g"]);
    }

    if (event.code === "KeyY") {
      setShapes(["y"]);
    }

    if (event.code === "KeyH") {
      setShapes(["h"]);
    }

    if (event.code === "KeyU") {
      setShapes(["u"]);
    }

    if (event.code === "KeyJ") {
      setShapes(["j"]);
    }

    if (event.code === "KeyK") {
      setShapes(["k"]);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === "KeyA") {
      setCNote(false);
    }

    if (event.code === "KeyW") {
      setDsharpNote(false);
    }

    if (event.code === "KeyS") {
      setDNote(false);
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
      <div>
        {{
          true: <ACircle />
        }[CNote]}
      </div>
      <div>
        {{
          true: <WCircle />
        }[DsharpNote]}
      </div>
      <div>
        {{
          true: <SCircle />
        }[DNote]}
      </div>

      {/* <div id="circleContainer">
        {
          {
            a: <ACircle />,
            w: <WCircle />,
            s: <SCircle />,
            e: <ECircle />,
            d: <DCircle />,
            f: <FCircle />,
            t: <TCircle />,
            g: <GCircle />,
            y: <YCircle />,
            h: <HCircle />,
            u: <UCircle />,
            j: <JCircle />,
            k: <KCircle />,
          }[shapes]
        }
      </div> */}
    </div>
  );
}

//import { ACircle, WCircle, SCircle, ECircle, DCircle, FCircle, TCircle, UCircle, JCircle, KCircle } from './shapes/circles';

export default connect(
  null,
  {} //pass in actions here
)(Visualizer);
