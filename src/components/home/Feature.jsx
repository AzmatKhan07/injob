import React from "react";
import cardDate from "../../utils/Carddate";

export default function Feature(props) {
  return (
    <div className="feature">
      <div className="fhead">
        <img src={props.image} alt="icon" className="img-fluid" />
        <h5 className="cTitle">{props.title}</h5>
      </div>
      <p className="text">{props.text}</p>
    </div>
  );
}
