import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiPycharm
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiLinux />
        {/* <p className="tech-icons-text">Linux</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode />
        {/* <p className="tech-icons-text">VS Code</p> */}
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p className="tech-icons-text">PyCharm</p>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-icons-text">Docker</p>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-icons-text">Vercel</p>
      </Col> */}
    </Row>
  );
}

export default Toolstack;
