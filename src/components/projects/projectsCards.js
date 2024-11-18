import React, { useState } from 'react';
import * as Style from './projectsCards.style';
import projectsData from '../../data/projectsData.json';

const ProjectCards = () => {
  const [focusedProjectIndex, setFocusedProjectIndex] = useState(0);
  const projects = projectsData;

  if (!projects || projects.length === 0) {
    return <p>No projects available.</p>;
  }

  const handleProjectClick = (index) => {
    setFocusedProjectIndex(index);
  };

  return (
    <Style.Section>
      <Style.FocusedProjectCard style={{ textAlign: 'center', padding: '30px', border: '2px solid #ddd' }}>
        <Style.ProjectImage 
          src={projects[focusedProjectIndex].image} 
          alt={projects[focusedProjectIndex].title} 
          style={{ maxWidth: '200px', maxHeight: '200px', margin: '0 auto' }}
        />
        <Style.ProjectTitle style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
          {projects[focusedProjectIndex].title}
        </Style.ProjectTitle>
        <Style.ProjectDescription style={{ fontSize: '1.1em', margin: '10px 0' }}>
          {projects[focusedProjectIndex].description}
        </Style.ProjectDescription>
        <Style.ProjectLink 
          href={projects[focusedProjectIndex].link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#61dafb', color: '#fff', borderRadius: '5px' }}
        >
          View Project
        </Style.ProjectLink>
      </Style.FocusedProjectCard>
      <Style.MiniProjectList>
        {projects.map((project, index) => (
          index !== focusedProjectIndex && (
            <Style.MiniProjectItem key={index} onClick={() => handleProjectClick(index)}>
              <Style.ProjectImage src={project.image} alt={project.title} />
              <Style.ProjectTitle>{project.title}</Style.ProjectTitle>
            </Style.MiniProjectItem>
          )
        ))}
      </Style.MiniProjectList>
    </Style.Section>
  );
};

export default ProjectCards;
