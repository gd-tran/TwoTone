import React from 'react';

const ACircle = () => {
  const circleStyle = {
    padding:10,
    margin:20,
    display:"inline-block",
    backgroundColor: "#A40E4C",
    borderRadius: "50%",
    width:100,
    height:100,
  };
  return (
    <div style={circleStyle}>
    </div>
  );

  var Circle = React.createClass({
    render:function(){
      var circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        backgroundColor: "#A40E4C",
        borderRadius: "50%",
        width:100,
        height:100,
      };
      return (
        <div style={circleStyle}>
        </div>
      );
    }
  });
}

const WCircle = () => {
    return (
        <div>W</div>
    )
}

const SCircle = () => {
    return (
        <div>S</div>
    )
}

const ECircle = () => {
  return (
      <div>E</div>
  )
}

const DCircle = () => {
    return (
        <div>D</div>
    )
}

const FCircle = () => {
    return (
        <div>F</div>
    )
}

  const TCircle = () => {
      return (
          <div>T</div>
      )
  }
  
  const GCircle = () => {
      return (
          <div>G</div>
      )
  }

  const YCircle = () => {
    return (
        <div>Y</div>
    )
}

const UCircle = () => {
    return (
        <div>U</div>
    )
}

const JCircle = () => {
    return (
        <div>J</div>
    )
}

const KCircle = () => {
    return (
        <div>K</div>
    )
}

export default { ACircle }