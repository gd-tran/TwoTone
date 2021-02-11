import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Piano from './components/Piano';
import Mellow from './components/Mellow';
import Filter from './components/Filter'
import { Recorder } from './components/Recorder';
import { Settings } from './components/Settings';
import { Control } from './components/Control';
import Filter from './components/Filter';
import Distortion from './components/Distortion'
import './styles.scss'

const App = () => {

  let history = useHistory();

  const handleClick = (e) => {
    if (e.target.value === "Piano") {
      history.push('/')
    } else if (e.target.value === "Mellow") {
      history.push('/mellow')
    } else if (e.target.value === "Filter") {
      history.push('/filter')
    }
  }

  return (
    <div>
      <button value="Piano" onClick={handleClick}>Piano</button>
      <button value="Mellow" onClick={handleClick}>Mellow</button>
      <button value="Filter" onClick={handleClick}>Filter</button>
      <Switch>
      <Route exact path='/filter'>
          <Filter />
        </Route>
        <Route exact path='/mellow'>
          <Mellow />
        </Route>
        <Route path='/'>
          <Piano />
        </Route>
      </Switch>
    </div>
  )
};

export { App };

