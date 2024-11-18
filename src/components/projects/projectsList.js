import React from 'react';
import projectsData from '../../data/projectsData.json';

import * as Style from './projectsList.style';

const ProjectsList = () => {
  const projectList = projectsData;

  return (
    <Style.Section>
      <Style.Title>Projects</Style.Title>
      <Style.Description>
        Here are some notable projects (repositories) on my GitHub. Some are personal projects, while others are collaborative efforts where I contributed as part of a team. Check them out to see my skills in action!
      </Style.Description>
      <Style.ProjectList>
        {projectList.map((project, index) => (
          <Style.ProjectItem key={index}>
            {project.image && (
              <Style.ProjectImage src={project.image} alt={`${project.title} image`} />
            )}
            <Style.ProjectTitle>
              <Style.ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </Style.ProjectLink>
            </Style.ProjectTitle>
            <Style.ProjectDescription>{project.description}</Style.ProjectDescription>
          </Style.ProjectItem>
        ))}
      </Style.ProjectList>
      <Style.FooterDescription>
        Feel free to explore these repositories to see more about my development style, coding standards, and project organization.
      </Style.FooterDescription>
    </Style.Section>
  );
};

export default ProjectsList;