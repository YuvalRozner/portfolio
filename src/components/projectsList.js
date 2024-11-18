import React from 'react';

import projectsData from '../data/projectsData.json';

const ProjectsList = () => {
  const projectList = projectsData;

  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>Projects</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Here are some notable projects (repositories) on my GitHub. Some are personal projects, while others are collaborative efforts where I contributed as part of a team. Check them out to see my skills in action!
      </p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projectList.map((project, index) => (
          <li key={index} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            {project.image && (
              <img src={project.image} alt={`${project.title} image`} style={{ width: '50px', height: '50px', borderRadius: '5px', marginRight: '10px', float: 'left' }} />
            )}
            <h3 style={{ margin: '0 0 5px 0' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>
                {project.title}
              </a>
            </h3>
            <p style={{ color: '#666', margin: 0 }}>{project.description}</p>
          </li>
        ))}
      </ul>
      <p style={{ color: '#666', marginTop: '20px' }}>
        Feel free to explore these repositories to see more about my development style, coding standards, and project organization.
      </p>
    </section>
  );
};

export default ProjectsList;
