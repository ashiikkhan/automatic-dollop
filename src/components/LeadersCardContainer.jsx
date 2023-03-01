import React from "react";
import { Container, Row } from "react-bootstrap";
import useLeadersData from "../hooks/useLeadersData";
import LeadersCard from "./LeadersCard";

const LeadersCardContainer = () => {
  const [leaders, setLeaders] = useLeadersData();
  console.log(leaders);
  return (
    <div className="overflow-hidden p-2 mb-2">
      <div className="container text-center p-4">
        <h2 className="fs-2 fw-bold">Our Leaders</h2>
      </div>
      <Container className="d-flex flex-wrap p-2">
        <Row className="w-100 text-center">
          {leaders.map((singleLeader) => (
            <LeadersCard
              singleLeader={singleLeader}
              key={singleLeader.id}
            ></LeadersCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LeadersCardContainer;
