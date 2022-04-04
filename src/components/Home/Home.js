import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import {
  SiLeetcode,
  SiGeeksforgeeks
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import {GrMail} from "react-icons/gr";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Abhiram S</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* Home2.js imported into Home.js */}
        <Container className="home-about-section">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a final year Civil Engineering student in <b className="purple">NIT Calicut</b> with 8 CGPA so far.
                <br />
                <br />I am fluent in langauges like
                <b className="purple"> C++, Python, Javascript and SQL.</b>
                <br />
                <br />
                My field of Interest's are building and designing&nbsp;
                <b className="purple">Websites</b>
                , practicing
                <b className="purple"> Data Structures and Algorithms problems </b>
                and also in areas related to{" "}
                <b className="purple">Automation</b>
                {" "}and implementing various {" "}
                <b className="purple">Optimization Algorithms.</b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Python</b> and
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
                &nbsp; like
                <b className="purple"> React.js</b>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>MY <span className="purple">PROFILES</span></h1> <br></br>
              {/* <p>
                Feel free to <span className="purple">connect </span>with me
              </p> */}
              <ul className="home-about-social-links">
                {/* <li className="social-icons">
                  <a
                    href="mailto: abhirams2020@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <GrMail />
                  </a>
                </li>    */}   
                {/* <li className="social-icons">
                  <a
                    href="tel: +918921180389"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FiPhoneCall />
                  </a>
                </li>    */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/abhirams2020/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>              
                <li className="social-icons">
                  <a
                    href="https://github.com/abhirams2020"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/abhirams2020"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://auth.geeksforgeeks.org/user/abhirams2020/profile"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/abhirams20201"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>

              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
