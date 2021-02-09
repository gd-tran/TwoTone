import React, { Component, useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      Two Tone
      <div>
      <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
      </div>
    </div>
  )
};


export { App };

