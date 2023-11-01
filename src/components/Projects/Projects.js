import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bilingual"
              description="The biggest project I'm currently working on is this project. Bilingual."
              ghLink="https://github.com/peaksoft-school/bilingual-js10"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Order Food"
              description="This is my project that was written in 2-3 months.Food ordering is the process when people order cooked food from restaurants, cafes or food delivery. This method of obtaining food has become incredibly popular in recent decades, and this is not surprising, given the convenience, choice , and the availability of food ordering services.
              Ordering food provides many benefits for both consumers and restaurants and cafes:"
              ghLink="https://github.com/GulaiymEdilbaeva/order-food"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Shop"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/GulaiymEdilbaeva/online-shop-test"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
