// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário
import avatar from '../../images/img.jpg';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img alt="eu" src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Gabriel Nicolau</h5>
        <p className="grey darken-2 white-text">Web Developer</p>
      </Row>
  </Card>
);

export default UserProfile;