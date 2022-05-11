import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhiram S </span>
            from <span className="purple"> Trivandrum, India.</span>
            <br />I am a final year student pursuing Civil Engineering in <span className="purple">NIT Calicut.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Distrohopping
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Android Rooting
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Linux Theming
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Sketching
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Travelling
            </li>
          </ul>
          <br></br>
          <p style={{ color: "#c770f0" }}>
            "If my mind can conceive it, and my heart can believe it,<br></br>then I can achieve it"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
