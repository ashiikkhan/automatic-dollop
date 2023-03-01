import React from "react";
import { Col } from "react-bootstrap";

const LeadersCard = (props) => {
  const { name, designation, description, img } = props.singleLeader;
  return (
    <Col md={12} lg={3} className="p-2">
      <div className="h-100 border-0">
        <div>
          <img
            src={img}
            alt=""
            width="200px"
            height="200px"
            className="rounded"
          />
        </div>
        <div>
          <h2 className="fs-5 fw-bold pt-2">{name}</h2>
          <p className="fst-italic">{designation}</p>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default LeadersCard;
