// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Resume</b></p>
            <p>Web developer since 15 years old. A technology lover, I worked on diferent enviroments, where I developed skills and knowledge in the areas of TI, process engineering, automation, quality, manufacturing and continuous improvement.</p>
            <br/>
            <p><b>Contact</b></p>
            <p> Fell free to send me a email. We can talk about tech anytime. </p>
            <p>  <br/> <i className="tiny material-icons">smartphone</i>   <span> +55 24 99821-6670 </span> </p>
            <p>  <br/> <i className="tiny material-icons">email</i> <span> ghanicolau@gmail.com </span> </p>
            <p>  <br/> <i className="tiny material-icons">laptop_windows</i> <span> <a href="https://www.linkedin.com/in/gabriel-nicolau/" target="blank"> https://www.linkedin.com/in/gabriel-nicolau/ </a> </span> </p>
            <p>  <br/> <i className="tiny material-icons">build</i> <span> <a href="https://github.com/gabrielarantes" target="blank"> https://github.com/gabrielarantes </a> </span> </p>
            
            
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Web Developer"
                    company="SIVIS TECNOLOGIA"
                    description="Development of aplications web, using PHP & SQL Server. Main Project: Ticket 4 You [https://ticket4you.com.br/eventos]"
                    // avatar={company_avatar}
        />
        <Experience title="Senior Web Developer"
                    company="Foco Comunicação [2014 - 2018]"
                    description="Development of aplications web, using PHP & MySQL. Main Projects: Orthopride [http://orthopride.com.br/] and Prêmio Jovem Brasileiro [http://premiojovem.com.br/]"
                    // avatar={company_avatar2}                    
        />

        <Experience title="Senior Web Developer"
                    company="AM4"
                    description="Development of aplications web, using PHP, ASP and ASP.NET languages + SQL Server."
                    // avatar={company_avatar2}                    
        />

    </Col>
  </Row>
);

export default Home;