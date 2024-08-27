import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // SiPostman,
  // SiHeroku,
  // SiVercel,
  // SiNetlify,
  SiGithub,
  SiGit,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel/>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint/>
      </Col>

     {/* <Col  xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
