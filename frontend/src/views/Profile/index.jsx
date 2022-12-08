
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

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
import PostShared from "../Feed/components/PostShared";

function Profile() {
  const [activeTab, setActiveTab] = useState("1");
  const [userInfo, setUserInfo] = useState()
  const navigate = useNavigate()
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

  

  const getUserInfo = () => {
    axios.get(`${URL_BASE}/user/userInfo/${id}`, getConfig())
      .then(res => setUserInfo(res.data.userData))
      .catch(err => console.log(err))
  }   

  useEffect(() => {
    return getUserInfo()
  }, [id])


  const followUser = () => {

    axios.post(`${URL_BASE}/user/addfollowing/${id}`, id, getConfig())
      .then(res => {
        console.log(res.data)
        getUserInfo()
      })
      .catch(err => console.log(err, `aqui hay algo raro`))
  }

  return (
    <>
      <Header />
      <div className="section profile-content">
        <Container style={{maxHeight: 350}}>
          <div className="owner">
            <div className="avatar">
              <Avatar
                alt={<AccountCircleIcon />}
                src={userInfo?.profileImage}
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {`${userInfo?.name} ${userInfo?.lastName}`}
                <br />
                <IconButton>
                <CommentOutlinedIcon/>
                </IconButton>
                <IconButton onClick={followUser}>
                <PersonAddAlt1OutlinedIcon/>
                </IconButton>
              </h4>
              <h6 className="description">{userInfo?.userRole?.role}</h6>
            </div>
          </div>

          <div  className="nav-tabs-navigation">
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
                    Followers
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
                    following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          <TabContent style={{ maxHeight: 200, overflow: 'scroll', cursor: 'pointer'}} className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {userInfo?.followers.map(follower =>
                      <>
                        <li>
                          <Row >
                            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                              <Avatar
                                onClick={() => navigate(`/profile/${follower._id}`)}

                                alt={<AccountCircleIcon />}
                                src={follower?.profileImage}
                                sx={{ width: 60, height: 60 }}
                              />
                            </Col>
                            <Col
                              onClick={() => navigate(`/profile/${follower._id}`)}

                              className="ml-auto mr-auto" lg="7" md="4" xs="4">
                              <h6>
                                {`${follower.name} ${follower.lastName}`} <br />
                                <small>Developer</small>
                              </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                              <FormGroup check>
                                <Label check>
                                  <IconButton >

                                    <PersonAddAltIcon />
                                  </IconButton>
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
                              <Avatar
                                onClick={() => navigate(`/profile/${follower._id}`)}

                                alt={<AccountCircleIcon />}
                                src={follower?.profileImage}
                                sx={{ width: 60, height: 60 }}
                              />
                            </Col>
                            <Col
                              onClick={() => navigate(`/profile/${follower._id}`)}
                              className="ml-auto mr-auto" lg="7" md="4" xs="4">
                              <h6>
                                {`${follower.name} ${follower.lastName}`} <br />
                                <small>Developer</small>
                              </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                              <FormGroup check>
                                <Label check>
                                  <IconButton onClick={() => followUser(follower._id)}>

                                    <PersonAddAltIcon />
                                  </IconButton>
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
      <Stack sx={{ padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Stack sx={{ width: '100%', mb: '1em' }}>

          <Divider><Typography variant="h5" color="initial"><strong>Posts</strong></Typography></Divider>
        </Stack>
        <Stack sx={{ maxWidth: 600, display: 'flex', gap: '1em' }} >

          {userInfo?.posts.map(post => <PostShared key={post._id} post={post} />).reverse()}
        </Stack>
      </Stack>
      {/* <DemoFooter /> */}
    </>
  );
}

export default Profile;
