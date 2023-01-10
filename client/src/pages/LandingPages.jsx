import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import imagelanding from '../assets/imglanding.png'
import img1 from '../assets/c1.png'
import img2 from '../assets/c2.png'
import Footer from "../components/Footer";

export default function LandingPages() {
  return (
    <div>
      <Navbar/>
      <div className="bg">
        <Container className="c1">
          <Row>
            <Col>
              <h1 className="fw-bold c1 ph">
                ABOUT
              </h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
              </p>
            </Col>
            <Col>
              <center>
                <img className="c1 imgz" src={imagelanding} alt='imgl'
                 />
              </center>
            </Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row className="c1">
            <Col>
            <img src={img2} className='imgz' alt='img2' />
            </Col>
            <Col>
              <center>
                <h1 className="ph" style={{color:'#FEB47B'}}>
                  VISI
                </h1>
              </center>
              <p className="text imgz" style={{color:'#849974'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="c1">
            <Col>
              <center>
                <h1 className="ph" style={{color:'#849974'}}>
                  MISI
                </h1>
              </center>
            <p className="text imgz" style={{color:'#FEB47B'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  
            </p>
            </Col>
          <Col>
            <img src={img1} alt='img1' className="imgz" />
          </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
}
