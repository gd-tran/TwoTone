import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Visualizer from './components/Visualizer';
import { Recorder } from './components/Recorder';
import { Settings } from './components/Settings';
import { Control } from './components/Control';
import NewSound from './components/Filter';
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
          <Recorder />
          <Control />
        </Route>
      </Switch>  */}
      <Filter />
    </div>
  )
};

export { App };

