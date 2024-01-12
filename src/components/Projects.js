import {Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/movie.webp";
import projImg2 from "../assets/img/park.jpg";
import projImg3 from "../assets/img/handwriting.jpeg";
import projImg4 from "../assets/img/breast-cancer-awareness-black-white-600nw-507350998.webp";
import projImg5 from "../assets/img/dog_cat.jpg";
import projImg6 from "../assets/img/ToDo.jpg";
export const Projects = () => {
    
    const projects = [{
        title: "Machine Learning",
        description: "Movie Recommendation System",
        imgUrl: projImg1,
    },
    {
        title: "Machine Learning",
        description: "Parkinson Disease Detection",
        imgUrl: projImg2,
    },
    {
        title: "Deep Learning",
        description: "Handwriting Digit Classification",
        imgUrl: projImg3,
    },
    {
        title: "Deep Learning",
        description: "Breast Cancer Classification",
        imgUrl: projImg4,
    },
    {
        title: "Deep Learning",
        description: "Dog Cat Classification",
        imgUrl: projImg5,
    },
    {
        title: "App Development",
        description: "Basic To Do App",
        imgUrl: projImg6,
    }
    ];

    return (
        <section className = "project" id = "project">
            <Container>
                <Row>
                    <Col>
                    <h2> Projects</h2>
                    <Tab.Container id ="projects-tabs" defaultActiveKey="first">
                    <Nav variant = "pills" className="nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">

                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                Tab Three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
        
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src = {colorSharp2}></img>
        </section>
    )
}