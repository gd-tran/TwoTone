import React from "react";
// import A from "./sounds/Piano_Roll_A3#.mp3";
const Control = () => {
  let clicked1 = false;
  let clicked2 = false;

  const chunks = [];
  const ac = new AudioContext();
  const dest = ac.createMediaStreamDestination();
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  mediaRecorder.ondataavailable = (e) => {
    // push each chunk (blobs) in an array
    chunks.push(e.data);
  };

  mediaRecorder.onstop = (e) => {
    const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
    document.getElementById("recording").src = URL.createObjectURL(blob);
  };



  const record = (e) => {
    if (!clicked1) {
      
      const trackF = ac.createMediaElementSource(document.getElementById("F3"))
      const trackAsharp = ac.createMediaElementSource(document.getElementById("ASharp"))
      trackF.connect(dest)
      trackAsharp.connect(dest)
      mediaRecorder.start();
      
      e.target.textContent = "Stop recording";
      clicked1 = true;
    } else {
      mediaRecorder.stop();
      
      e.target.disabled = true;
    }
  };

  const stopRecording = (e) => {
    console.log("stopped the recording");
    mediaRecorder.stop();
    
  };

  const playNoteASharp = (e) => {
    document.getElementById("ASharp").play()
  }
  const playNoteF = (e) => {
    document.getElementById("F3").play()
  }
  return (
    <div className="holder">
      <h1>Recorder Element</h1>
      <p>Encoding a pure sine wave to an Opus file </p>
      <button onClick={playNoteASharp}>A#</button>
      <button onClick={playNoteF}>F</button>

      <button onClick={record}>Start Recording</button>
  
      <button onClick={stopRecording}>STOP RECORDING</button>
      <audio id="ASharp" src="./src/assets/A3Sharp.mp3"></audio>
      <audio id="F3" src="./src/assets/F3.mp3"></audio>
      <audio controls id="recording"></audio>
    </div>
  );
};

// export { Control };