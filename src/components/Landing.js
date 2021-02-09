import React from "react";
import { connect } from "react-redux";

function Landing () {
    return <h1> Landing is working </h1>       
}


export default connect(
    null, { } // pass in actions here 
 ) (Landing);
