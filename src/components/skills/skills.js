// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

import blue from '../../images/blue.png'


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Skills</h5>
        <Card>
          <div>
            <p>Here are some skills I have. Yes, I know, I need to study a little more!</p>
            <br/>

            <p><b>Back End</b> <br/> </p>
            
            <p>PHP: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>ASP: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>JSP: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>Python: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>VB.Net:  <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /> </p> 

            <p>SQL Server: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p> 

            <p>MySQL: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>Node: <img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>
            
            <p><br/> <b>Front End</b> <br/> </p>

            <p>HTML: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>CSS: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>React: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /> </p>

            <p>React  Native: <img alt="blue" prop="blue" className="blue-point" src={blue} /> <img alt="blue" prop="blue" className="blue-point" src={blue} /> (I'm studing now!) </p>

            <p>Vue: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} />  </p>

            <p>Angular :( </p>

            <p>Jquery: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>Bootstrap: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><im alt="blue" prop="blue"g className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>Materialize: <img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /><img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>

            <p>Ember: <img alt="blue" prop="blue" className="blue-point" src={blue} /> </p>
                        
          </div>
        </Card>

    </Col>
  </Row>
);

export default Home;