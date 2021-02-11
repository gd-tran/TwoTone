import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Visualizer from './components/Visualizer';
import { Recorder } from './components/Recorder';
import { Settings } from './components/Settings'
import { Control } from './components/Control'
import './styles.scss'
const App = () => {

  return (
    <div>
      {/* <Switch>
        <Route exact path='/login'>
          <Landing />
        </Route>
        <Route exact path='/visualizer'> */}
          <Visualizer />
          {/* <Settings /> */}
          {/* <Recorder /> */}
          {/* <Control /> */}
        {/* </Route>
      </Switch> */}
    </div>
  )
};

export { App };

