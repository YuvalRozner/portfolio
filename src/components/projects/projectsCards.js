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
      <Style.FocusedProjectCard>
        <Style.ProjectImage src={projects[focusedProjectIndex].image} alt={projects[focusedProjectIndex].title} />
        <Style.ProjectTitle>{projects[focusedProjectIndex].title}</Style.ProjectTitle>
        <Style.ProjectDescription>{projects[focusedProjectIndex].description}</Style.ProjectDescription>
        <Style.ProjectLink href={projects[focusedProjectIndex].link} target="_blank" rel="noopener noreferrer">
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
