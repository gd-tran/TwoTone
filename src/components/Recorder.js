import React from "react";
// import A from "./sounds/Piano_Roll_A3#.mp3";
const Recorder = () => {
  let clicked1 = false;
  let clicked2 = false;
  const chunks = [];
  const ac = new AudioContext();

  const osc1 = ac.createOscillator();
  const osc2 = ac.createOscillator();
  osc2.type = "sine";
  const dest = ac.createMediaStreamDestination();
  const mediaRecorder = new MediaRecorder(dest.stream);
  osc1.connect(dest);
  osc2.connect(dest);


  // ASound.play();
  const audioElement = document.getElementById("pianoA")  

  mediaRecorder.ondataavailable = (e) => {
    // push each chunk (blobs) in an array
    chunks.push(e.data);
  };

  mediaRecorder.onstop = (e) => {
    // Make blob out of our blobs, and open it.
    const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
    document.getElementById("test").src = URL.createObjectURL(blob);
  };

  // add a second a button
  // two buttons, each has a corresponding oscilator.
  // on click, the oscilators connect and broadcast a tone locally.
  // both oscilators stream to the same destination.
  //

  const record = (e) => {
    console.log("sound1");
    if (!clicked1) {
      mediaRecorder.start();
      osc1.start(0);
      e.target.textContent = "Stop recording";
      clicked1 = true;
    } else {
      // mediaRecorder.stop();
      osc1.stop(0);
      e.target.disabled = true;
    }
  };

  const record2 = (e) => {
    console.log("sound2");
    if (!clicked2) {
      // mediaRecorder.start();
      osc2.frequency.value = 660;
      osc2.start(0);
      e.target.textContent = "Stop recording";
      clicked2 = true;
    } else {
      // mediaRecorder.stop();
      osc2.stop(0);
      e.target.disabled = true;
    }
  };

  const stopRecording = (e) => {
    console.log("stopped the recording");

    mediaRecorder.stop();
    osc1.stop(0);
    osc2.stop(0);
  };

  const playNoteASharp = (e) => {
    document.getElementById("ASharp").play()
  }
  const playNoteF = (e) => {
    document.getElementById("F3").play()
  }
  return (
    <div>
      <h1>Recorder Element</h1>
      <p>Encoding a pure sine wave to an Opus file </p>
      <button onClick={playNoteASharp}>A#</button>
      <button onClick={playNoteF}>F</button>

      {/* <button onClick={record}>Sound 1</button>
      <button onClick={record2}>Sound 2</button>
      <button onClick={stopRecording}>STOP RECORDING</button>
      <audio id="test" controls></audio> */}
      <audio id="ASharp" src="./src/assets/A3Sharp.mp3"></audio>
      <audio id="F3" controls src="./src/assets/F3.mp3"></audio>
    </div>
  );
};

export { Recorder };
