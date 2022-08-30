import React, { useState } from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import SkillSet from './components/skill/SkillSet';
import data from './components/skill/data';
import _ from 'lodash';

const langList = _.filter(data, {type: "language"});
const toolList = _.filter(data, {type: "tool"});
const envList = _.filter(data, {type: "environment"});

const App = () => (
  <Container fluid="sm" className="App">
    <Row className="pt-3 pb-3">
      <Col xs="12">
        <h1 className="text-center display-3 fw-bold border border-primary border-5 rounded p-5">ABOUT;
          <p className="fs-6 pt-1 fw-semibold">HyoGyeong Ryu</p>
        </h1>
      </Col>
    </Row>
    <Row className="pt-3">
      <Col xs="5">
        <Image rounded="true"
               className="border border-primary border-5"
               src="/images/profile.jpg"
               alt="photo" />
        <ul className="lh-lg list-unstyled mt-2">
          <li>🎂 1992. 06. 16.</li>
          <li>💌 fromben@kakao.com</li>
          <li>🏠 서울시 서초구 방배동</li>
        </ul>
      </Col>
      <Col xs="7">
        <p>안녕하세요! 👋</p>
        <p>제 이름은 유효경이고, 웹 개발자입니다. 2013년부터 일을 시작해 현재는 7년에 준하는 경력을 가지고 있습니다.</p>

        <p>주로 아래와 같은 개발 언어를 다룹니다. </p>
        <SkillSet list={langList} />

        <p>그리고 이런 툴과, </p>
        <SkillSet list={toolList} />

        <p>이런 환경에 대한 경험이 있습니다. </p>
        <SkillSet list={envList}/>
      </Col>
    </Row>
  </Container>
);

export default App;
