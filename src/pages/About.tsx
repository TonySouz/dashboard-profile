import React from "react";
import { Card } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4">Sobre Mim</h2>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Text>
            Olá! 👋 Meu nome é <b>Seu Nome</b>, sou desenvolvedor front-end com experiência em 
            <b> React, TypeScript e Node.js</b>.  
            Tenho paixão por criar aplicações web modernas, responsivas e escaláveis. 🚀
          </Card.Text>
          <Card.Text>
            💡 Gosto de trabalhar com:  
            - Design limpo e UI responsiva  
            - Integração de APIs  
            - Dashboards interativos  
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;