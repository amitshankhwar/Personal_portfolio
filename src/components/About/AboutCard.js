import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

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
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Linux Theming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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
