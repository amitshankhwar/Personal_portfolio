import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiMicrosoftexcel,
  SiGnubash,
  SiJava,
  SiCss3,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CgCPlusPlus />
        {/* <p className="tech-icons-text">C++</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
        {/* <p className="tech-icons-text">Python</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
        {/* <p className="tech-icons-text">JavaScript</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
        {/* <p className="tech-icons-text">React.js</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCss3 />
        {/* <p className="tech-icons-text">CSS3</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiHtml5 />
        {/* <p className="tech-icons-text">HTML5</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNodedotjs />
        {/* <p className="tech-icons-text">Node.js</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMongodb />
        {/* <p className="tech-icons-text">Mongodb</p> */}
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
        {/* <p className="tech-icons-text">Git</p> */}
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col> */}
    </Row>
  );
}

export default Techstack;
