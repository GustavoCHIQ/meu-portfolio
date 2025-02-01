import Link from 'next/link';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'API para Gerenciar Orçamentos',
      tech: 'Typescript, Postgres, JWT, Prisma, Fastify, Zod',
      githubUrl: 'https://github.com/GustavoCHIQ/backend-sistema-orcamento', // Link do GitHub
    },
    {
      id: 2,
      title: 'RextonOS - App de Orçamentos',
      tech: 'React Native, Expo, Javascript',
      githubUrl: 'https://github.com/GustavoCHIQ/rexton-os'
    },
    {
      id: 3,
      title: 'Em Breve',
      tech: 'Em Breve',
      githubUrl: '#'
    },
  ];

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projetos</h2>
        <p>Confira alguns dos meus projetos pessoais!</p>
      </div>
      <article className="project">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div className="project-info">
              <div className="project-bio">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
              </div>
              <div className="project-link">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </article>
      <Link href="" className="btn btn-secondary" target="_blank">
        Ver mais <FaArrowRight />
      </Link>
    </section>
  );
}