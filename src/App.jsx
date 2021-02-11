import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Visualizer from './components/Visualizer';
import { Recorder } from './components/Recorder';
import { Control } from './components/Control';
// local state here to track whether the user has logged in correctly
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
          {/* <Recorder /> */}
          {/* <Control /> */}
        {/* </Route>
      </Switch> */}
    </div>
  )
};


export { App };

