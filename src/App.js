import React, { useState } from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';

const App = () => (
  <div className="App">
    <Container fluid="sm" className="p-3">
      <Row>
        <div className="App-header">
          <h1 className="display-2 fw-bold">ABOUT;</h1>
          <strong>HyoGyeong Ryu</strong>
        </div>
        <hr/>
      </Row>
      <Row className="mt-4">
        <Col xs="auto">
          <Image roundedCircle="true"
                 className="border border-success border-5"
                 src="/profile.jpg"
                 alt="photo" />
        </Col>
        <Col>
            <h2 className="fw-bold">Profile</h2>
            <ul className="lh-lg list-unstyled mt-2">
              <li>🎂 1992. 06. 16.</li>
              <li>💌 fromben@kakao.com</li>
              <li>🏠 서울시 서초구 방배동</li>
            </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
