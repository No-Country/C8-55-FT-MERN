
import React from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function Header() {
  let pageHeader = React.createRef();
  
  const navigate = useNavigate()

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url('front.jpeg')`
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>RocketCup</h1>
            <h3>Start designing your proyect with us!</h3>
            <br />
            {/* <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button> */}
            <Button onClick={() =>navigate('/projects/create')} className="btn-round" color="neutral" type="button" outline>
              Crear proyecto
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
