import React from "react";
import { Container, Row } from "react-bootstrap";
import useLeadersData from "../hooks/useLeadersData";
import LeadersCard from "./LeadersCard";

const LeadersCardContainer = () => {
  const [leaders, setLeaders] = useLeadersData();
  console.log(leaders);
  return (
    <div className="overflow-hidden">
      <Container className="d-flex flex-wrap">
        <h1>Our Leaders</h1>
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
