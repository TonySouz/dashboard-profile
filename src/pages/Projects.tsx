import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ui/ProjectCard";

type Projeto = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const projetos: Projeto[] = [
  {
    id: 1,
    title: "Scanner TCP",
    description:
      `O script realiza uma varredura TCP porta a porta de forma síncrona em um IP, 
      hostname ou bloco CIDR, verificando se as portas estão abertas, fechadas ou filtradas. 
      Para portas abertas, ele tenta coletar informações básicas do serviço (banner grabbing), 
      enviando uma requisição mínima para HTTP quando aplicável. Todos os resultados, 
      incluindo estado das portas e banners, são salvos em um arquivo JSON\ (report.json)\. 
      É possível configurar um timeout para cada conexão, 
      evitando que a varredura trave em hosts lentos ou inacessíveis.`,
    imageUrl: "/scanner-tcp.png",
    link: "https://github.com/TonySouz/vuln-scanner.git",
  },
  {
    id: 2,
    title: "API Node.js",
    description: "API RESTful com autenticação JWT.",
    imageUrl: "/api.png",
    link: "https://github.com/meuprojeto/api-node",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos.",
    imageUrl: "/dashboard.png",
    link: "https://meudashboard.com",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4">Projetos</h2>
      <Row className="g-4">
        {projetos.map((proj) => (
          <Col xs={12} sm={6} md={4} key={proj.id}>
            <ProjectCard
              title={proj.title}
              description={proj.description}
              imageUrl={proj.imageUrl}
              link={proj.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;