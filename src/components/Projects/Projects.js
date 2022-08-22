import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import todo from "../../Assets/Projects/todo.png";
import attendance from "../../Assets/Projects/attendance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Dev Community"
              description="This project is basically a real time chat with video call functionality for developers Where people can send invite to thier friends and all I use SocketIO as our signaling server for our application and for realtime communication as well as for Video call functionality I use WebRTC and for basic frontend React.js is used. "
              link="https://github.com/amitshankhwar/ChatApp/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Fashion Shop"
              description="This is a full stack web application for buying men's and women's styling stuffs called 'Fashion Shop'. We have used React.js (styled-components), Redux for state management in frontend. "
              link="https://github.com/abhirams2020/personal-schedule-manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="DSA Problems Tracker"
              description="By using python for web scraping, the program marks the attendance on Eduserver and opens the online class at the right time. Users can input username and password in the auto.py file and modify the timetable.py file to run the program and maintain 100% attendance."
              link="https://github.com/abhirams2020/eduserver-attendance-automate"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="My Portfolio Website"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */} 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;