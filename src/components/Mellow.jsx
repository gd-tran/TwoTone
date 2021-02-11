import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  ADiamond,
  WDiamond,
  SDiamond,
  EDiamond,
  DDiamond,
  FDiamond,
  TDiamond,
  GDiamond,
  YDiamond,
  HDiamond,
  UDiamond,
  JDiamond,
  KDiamond,
} from "./shapes/diamonds.jsx"

const Mellow = () => {
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


  
  
   
  //   const ac = new AudioContext()
  //   const dest = ac.createMediaStreamDestination();
  //   const biquad = ac.createBiquadFilter()

  //   const mediaRecorder = new MediaRecorder(dest.stream);
  //   if (!clicked) {
  //     // const captureStream = ele.captureStream()
  //     const track2 = ac.createMediaElementSource(document.getElementById("E3"))
  //     const track1 = ac.createMediaElementSource(document.getElementById("C3"))
  //     biquad.type = "hishelf";
  //     track1.connect(biquad)
  //     track2.connect(biquad)
  //     // distortion.connect(biquad)
  //     biquad.connect(ac.destination)
  //     // track2.connect(dest)
  //     // track1.connect(ac.destination)
  //     // track2.connect(ac.destination)
  //     // mediaRecorder.connect(ac.destination)
  //     // mediaRecorder.start();
  //     // e.target.textContent = "Stop recording";
  //     // clicked = true;
  //   } else {
  //     mediaRecorder.stop();
  //     e.target.disabled = true;
  //   }
    
  //   mediaRecorder.ondataavailable = (e) => {
  //     // push each chunk (blobs) in an array
  //     chunks.push(e.data);
  //   };
  //   mediaRecorder.onstop = (e) => {
  //     const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  //     document.getElementById("blob").src = URL.createObjectURL(blob);
  //   };
  // };
    
    
 

  const handleKeyDown = (event) => {
    //updates state using
    if (event.code === "KeyA") {
      setCNote(true);
      document.getElementById("C3").volume = 0.1
      document.getElementById("C3").play()
    }

    if (event.code === "KeyW") {
      setCsharpNote(true);
      document.getElementById("C3Sharp").volume = 0.1
      document.getElementById("C3Sharp").play()
    }

    if (event.code === "KeyS") {
      setDNote(true);
      document.getElementById("D3").volume = 0.1
      document.getElementById("D3").play()
    }

    if (event.code === "KeyE") {
      setDsharpNote(true);
      document.getElementById("D3Sharp").volume = 0.1
      document.getElementById("D3Sharp").play()
    }

    if (event.code === "KeyD") {
      setENote(true);
      document.getElementById("E3").volume = 0.1
      document.getElementById("E3").play()
    }

    if (event.code === "KeyF") {
      setFNote(true);
      document.getElementById("F3").volume = 0.1
      document.getElementById("F3").play()
    }

    if (event.code === "KeyT") {
      setFsharpNote(true);
      document.getElementById("F3Sharp").volume = 0.1
      document.getElementById("F3Sharp").play()
    }

    if (event.code === "KeyG") {
      setGNote(true);
      document.getElementById("G3").volume = 0.1
      document.getElementById("G3").play()
    }

    if (event.code === "KeyY") {
      setGsharpNote(true);
      document.getElementById("G3Sharp").volume = 0.1
      document.getElementById("G3Sharp").play()
    }

    if (event.code === "KeyH") {
      setANote(true);
      document.getElementById("A3").volume = 0.1
      document.getElementById("A3").play()
    }

    if (event.code === "KeyU") {
      setAsharpNote(true);
      document.getElementById("A3Sharp").volume = 0.1
      document.getElementById("A3Sharp").play()
    }

    if (event.code === "KeyJ") {
      setBNote(true);
      document.getElementById("B3").volume = 0.1
      document.getElementById("B3").play()
    }

    if (event.code === "KeyK") {
      setHighCNote(true);
      document.getElementById("C4").volume = 0.1
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

  const changeShape = () => {
    if (shape === 'circle') {
      setShape('diamond');
    } else if (shape === 'diamond') {
      setShape('circle')
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
    <div>
      <div>
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
      </div>
      <div id="container">
        <div id="circleContainer">  
          <div>
            {{
              true: <ADiamond />
            }[CNote]}
          </div>
          <div>
            {{
              true: <WDiamond />
            }[CsharpNote]}
          </div>
          <div>
            {{
              true: <SDiamond />
            }[DNote]}
          </div>
          <div>
            {{
              true: <EDiamond />
            }[DsharpNote]}
          </div>
          <div>
            {{
              true: <DDiamond />
            }[ENote]}
          </div>
          <div>
            {{
              true: <FDiamond />
            }[FNote]}
          </div>
          <div>
            {{
              true: <TDiamond />
            }[FsharpNote]}
          </div>
          <div>
            {{
              true: <GDiamond />
            }[GNote]}
          </div>
          <div>
            {{
              true: <YDiamond />
            }[GsharpNote]}
          </div>
          <div>
            {{
              true: <HDiamond />
            }[ANote]}
          </div>
          <div>
            {{
              true: <UDiamond />
            }[AsharpNote]}
          </div>
          <div>
            {{
              true: <JDiamond />
            }[BNote]}
          </div>
          <div>
            {{
              true: <KDiamond />
            }[highCNote]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  null,
  {} //pass in actions here
)(Mellow);
