import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Visualizer from './components/Visualizer';
import { Recorder } from './components/Recorder';
import { Settings } from './components/Settings';
import { Control } from './components/Control';
import Filter from './components/Filter';
import Distortion from './components/Distortion'
import './styles.scss'
const App = () => {

  return (
    <div>
      {/* <Switch>
        <Route exact path='/visualizer'>
          <Visualizer />
        </Route>
        <Route exact path='/sound2'>
          <NewSound />
          <Settings /> 
          <Control />
          </Route>
        </Switch>  */}
      {/* <Filter /> */}
      <Distortion />
        {/* <Recorder /> */}
    </div>
  )
};

export { App };

