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
