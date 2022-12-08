
import React, { useEffect } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

function LandingPage() {

    const navigate = useNavigate()


  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <Header />
      <div className="main">
        <div className="section text-center">
            <Stack sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingX: '2em'}}>

              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Acerca de</h2>
                <h5 className="description">
                En RocketCup puedes explorar ideas con mucha libertad pero además formar
                <br/>
                 lazos con gente que compartem intereses y formar un equipo.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  style={{backgroundColor: '#FF9F1C', border: 'none'}}
                  onClick={() => navigate('/projects')}
                >
                  Ver proyectos creados
                </Button>
              </Col>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon" style={{color: '#FF9F1C'}}>
                    <PsychologyOutlinedIcon fontSize="60" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Piensa en un proyecto</h4>
                    <p className="description">
                      Conceptualiza el proyecto que tanto haz querido compartir con el mundo
                    </p>
             
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon" style={{color: '#FF9F1C'}}>
                    <RocketLaunchOutlinedIcon fontSize="60" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Publica tu proyecto</h4>
                    <p>
                     Comparte tu proyecto con el mundo para que puedas encontrar otros colaboradores e inversionistas
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon" style={{color: '#FF9F1C'}}>
                    <CodeOffOutlinedIcon fontSize="60" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Programa en comunidad</h4>
                    <p>
                    Encuentra otros programadores y
                      desarrollar tu idea en equipo
                    </p>
              
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon" style={{color: '#FF9F1C'}}>
                    <PaymentsOutlinedIcon fontSize="60"/>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Encuentra Financiamiento</h4>
                    <p>
                     Publica cuanto dinero necesita tu proyecto y encuentra inversionistas que crean en ti
                    </p>
        
                  </div>
                </div>
              </Col>
            </Row>
          </Stack>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Developer Team | <em>C8-FT-55-MERN</em></h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="jere.png"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Jeremias Gomez</CardTitle>
                        <h6 className="card-category">UI / UX Designer</h6>
                      </div>
                    </a>
                   
                  </CardBody>
               
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="Deriam Suarez"
                        src="deriam.png"
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Deriam Suarez</CardTitle>
                        <h6 className="card-category">Front-End Developer</h6>
                      </div>
               
                  </CardBody>
               
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="agustin"
                        src="fede.png"
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Federico Montenegro</CardTitle>
                        <h6 className="card-category">front-end developer</h6>
                      </div>
              
                  </CardBody>
               
                </Card>
              </Col>
            </Row>
            <Row>
            <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src="mateo.png"
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Mateo del Campillo</CardTitle>
                        <h6 className="card-category">back-end developer</h6>
                      </div>
                   
                  </CardBody>
               
                </Card>
              </Col>
            <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="francis.png"
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Francisco Gimenez</CardTitle>
                        <h6 className="card-category">back-end developer</h6>
                      </div>

        
                  </CardBody>
               
                </Card>
              </Col>
             
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src="agustin.png"
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Agustin Sandoval</CardTitle>
                        <h6 className="card-category">back-end developer</h6>
                      </div>
                  </CardBody>
               
                </Card>
              </Col>

            </Row>
          </Container>
        </div>
        {/* <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>

    </>
  );
}

export default LandingPage;
