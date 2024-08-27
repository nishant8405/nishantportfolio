import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiMysql,
  DiGit,
  DiCss3,
  DiGithub,
  DiPhp,
} from "react-icons/di";
import {
  SiC,
  // SiMaterialui,
  // SiGraphql,
  // SiSolidity,
  // SiRedux,
  // SiMongodb,
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>


      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col> */}
    </Row>
  );
}

export default Techstack;
