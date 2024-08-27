import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/cal.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="E-Commerce"
              description="In this e-commerce project, HTML, CSS, and JavaScript are used to create a responsive online store. The project features product listings, a shopping cart, and checkout functionality. HTML structures the content, CSS ensures a visually appealing design, and JavaScript handles interactivity, such as adding items to the cart and processing payments."
              ghLink="https://github.com/nishant8405/Ecommerce"
              demoLink="https://calculatenishant.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Sorting-Application ReactJs"
              description="This Sorting Application, built with React.js, showcases different sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort. The app visually demonstrates the sorting process step-by-step, making it easier to understand how each algorithm works. React's  and a responsive user experience throughout the sorting operations."
              ghLink="https://github.com/nishant8405/Sorting-project"
              demoLink="https://sorting-web-app.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Tag-Blog"
              description="I created a tech blog website using HTML, CSS, JavaScript, Ajax, and Bootstrap for the front‐end, and Java, JSP, Servlets, and MySQL for the back‐end. The project involved designing and implementing the website’s user interface, developing the back‐end logic for user authentication, data storage and retrieval, for enhanced functionality."
              ghLink="https://github.com/nishant8405/TAG-BLOG"
              // demoLink="https://nishant-todolist.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="To-Do List"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/nishant8405/TO-DO-LIST"
              demoLink="https://nishant-todolist.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Calculator"
              description="This calculator app, built with React.js, offers a simple yet efficient way to perform basic arithmetic operations. React's component-based structure allows for clear organization of functions, such as addition, subtraction, multiplication, and division. State management in React ensures real-time updates as users  immediate results,smooth user experience."
              ghLink="https://github.com/nishant8405/calculate"
              demoLink="https://calculatenishant.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/nishant8405/Go-Food"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects