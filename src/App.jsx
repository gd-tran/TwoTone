import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Piano from './components/Piano';
import Mellow from './components/Mellow';
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
    <div className="windowDiv">
      <button className="routeButton" style={{backgroundColor: "#7AB44D" }} value="Piano" onClick={handleClick}></button>
      <button className="routeButton" style={{backgroundColor: "#7AB44F" }} value="Mellow" onClick={handleClick}></button>
      <button className="routeButton" style={{backgroundColor: "#7AB44D" }} value="Filter" onClick={handleClick}></button>
      <Switch>
        <Route exact path='/filter'>
          <Filter />
        </Route>
        <Route exact path='/mellow'>
          {/* <Distortion /> */}
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

