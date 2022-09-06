import React, { useState } from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import data from './components/skill/data.json';
import SkillSetElements from './components/skill/SkillSet';
import _ from 'lodash';

const dataset = _.groupBy(data, 'type');

const App = () => (
    <Container fluid="sm" className="App">
      <Row className="pt-3 pb-3">
        <Col xs={12}>
          <h1 className="text-center display-3 fw-bold rounded p-5 bg-box">ABOUT;
            <p className="fs-6 pt-1 fw-semibold">HyoGyeong Ryu</p>
          </h1>
        </Col>
      </Row>
      <Row className="pt-2">
        <Col xs={12} sm={3} md={3} lg={3} className="text-center pb-3">
          <Image src="/images/profile.jpg"
                 alt="photo"
                 fluid={true}
                 roundedCircle={true}
                 className="border border-primary border-3" />
          <hr/>
          <ul className="list-unstyled mt-2">
            <li><small>🎂 1992. 06. 16.</small></li>
            <li><small>💌 fromben@kakao.com</small></li>
            <li><small>🏠 서울시 서초구 방배동</small></li>
          </ul>
        </Col>
        <Col xs={12} sm={9} md={9} lg={9}>
          <div className="rounded p-4 bg-box">
            <h4 className="pb-2 fw-bold">안녕하세요! 👋</h4>
            <p>제 이름은 유효경이고, 웹 개발자입니다. 2013년부터 일을 시작해 현재는 7년에 준하는 경력을 가지고 있습니다.</p>

            <p>주로 아래와 같은 개발 언어를 다룹니다. </p>
            <SkillSetElements list={dataset.language} />

            <p>그리고 이런 툴과,</p>
            <SkillSetElements list={dataset.tool} />

            <p>이런 환경에 대한 경험이 있습니다.</p>
            <SkillSetElements list={dataset.environment} />
          </div>
        </Col>
      </Row>
    </Container>
);

export default App;
