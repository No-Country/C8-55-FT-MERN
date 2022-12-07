/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import getConfig from "../../config";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";
import Header from "./components/Header";

function Profile() {
  const [activeTab, setActiveTab] = useState("1");
  const [userInfo, setUserInfo] = useState()

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const { id } = useParams()

  const URL_BASE = import.meta.env.VITE_REACT_APP_API_URI

  useEffect(() => {
    axios.get(`${URL_BASE}/user/userInfo/${id}`, getConfig())
      .then(res => setUserInfo(res.data.userData))
      .catch(err => console.log(err))
  }, [])



  console.log(userInfo)
  return (
    <>
      <Header />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <Avatar
                alt={<AccountCircleIcon/>}
                src={userInfo?.profileImage}
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {`${userInfo?.name} ${userInfo?.lastName}`} <br />
              </h4>
              <h6 className="description">{userInfo?.userRole?.role}</h6>
            </div>
          </div>

          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    style={{ cursor: 'pointer' }}
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: 'pointer' }}
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {userInfo?.followers.map(follower =>
                      <>
                        <li>
                          <Row>
                            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                              <img
                                alt={`${follower.name} ${follower.lastName}`}
                                className="img-circle img-no-padding img-responsive"
                                src={`${follower.profileImage}`}
                              />
                            </Col>
                            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                              <h6>
                                {`${follower.name} ${follower.lastName}`} <br />
                                <small>Developer</small>
                              </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    defaultChecked
                                    defaultValue=""
                                    type="checkbox"
                                  />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </li>
                        <hr />
                      </>
                    )}
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {userInfo?.following.map(follower =>
                      <>
                        <li>
                          <Row>
                            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                              <img
                                alt={`${follower.name} ${follower.lastName}`}
                                className="img-circle img-no-padding img-responsive"
                                src={`${follower.profileImage}`}
                              />
                            </Col>
                            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                              <h6>
                                {`${follower.name} ${follower.lastName}`} <br />
                                <small>Developer</small>
                              </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                              <FormGroup check>
                                <Label check>
                                  <Input
                                    defaultChecked
                                    defaultValue=""
                                    type="checkbox"
                                  />
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </li>
                        <hr />
                      </>
                    )}
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      {/* <DemoFooter /> */}
    </>
  );
}

export default Profile;
