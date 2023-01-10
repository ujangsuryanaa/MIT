import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import icon from '../assets/icon.png'

export default function Footer() {
  return (
    <div className='bgf footer color'>
      <Container className='c1'>
        <Row>
            <Col sm={4}>
                <Row>
                    <Col sm={2}>
                        <img src={icon} style={{width:'45px', height:'45px'}}/>
                    </Col>
                    <Col>
                        <p style={{paddingTop:'12px'}}>Mitra Inti Teknologi</p>
                    </Col>
                </Row>
            </Col>
            <Col sm={8}>
                <Row style={{paddingTop:'12px'}}>
                    <Col sm={7}></Col>
                    <Col>Home</Col>
                    <Col>Service</Col>
                    <Col>Gallery</Col>
                    <Col>Contact</Col>
                </Row>
            </Col>
        </Row>
      </Container>
      <center className='c2'>
        Copyright mit All Right Reserved.
      </center>
    </div>
  )
}
