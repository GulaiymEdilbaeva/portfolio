import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gulaiym Edilbaeva </span>
            from <span className="purple"> Kyrgyzstan, Bishkek.</span>
            <br /> I am a final year student getting a Frontend developer.
            <br />
            Also, I am currently working as a software developer at Peaksoft
            House
            <br />
            <br />I have experience working with various types of projects,
            including web applications for ordering food, project management and
            online shopping. Strengths: Ability to work with modern technologies
            and frameworks. Experience working with various types of projects.
            Ability to learn new skills quickly. Creativity and attention to
            detail. Work experience: Commercial experience on the "Bilingual"
            project. Internship in the company "Peak softHouse" . In the future,
            I plan to develop in the field of frontend development and become a
            qualified specialist in this field.
          </p>
          Apart from coding, some other activities that I love to do!
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading a book
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            The biggest problem with programmers is that you'll never be able to
            figure out what he's doing until it's too late.{" "}
          </p>
          <footer className="blockquote-footer">Gulaiym</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
