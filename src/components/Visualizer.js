import React from "react";
import { connect } from "react-redux";

// all the components wee need for the visualizer to work will live on this compnent

function Visualizer() {
    return <h1> Visualizer is working </h1>       
}


export default connect(
    null, { } //pass in actions here 
 ) (Visualizer);

