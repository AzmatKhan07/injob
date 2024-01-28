import React from "react";
import { Col, Row } from "react-bootstrap";
import Feature from "./Feature";
import cardDate from "../../utils/Carddate";

export default function Workcard(props) {
  const { start, end } = props;
  return (
    <Row className="workRow">
      <Col lg={"6"}>
        <div className="workImage">
          <img src={props.image} alt="workImage" className="img-fluid" />
        </div>
      </Col>
      <Col lg={"6"}>
        <div className="workContent">
          <p className="subtitle">{props.step}</p>
          <h1 className="title">{props.title}</h1>

          {cardDate.slice(start, end).map((value, index) => (
            <Feature
              key={index}
              image={value.image}
              title={value.title}
              text={value.text}
            />
          ))}

          <div className="certifImage">
            <img src="/img/workCard.png" alt="" className="img-fluid" />
          </div>
        </div>
      </Col>
    </Row>
  );
}
