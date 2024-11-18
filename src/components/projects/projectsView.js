import React from 'react';
import ProjectsList from './projectsList';
import ProjectCards from './projectsCards';
import * as Style from './projectsView.style';

const ProjectsView = ({ viewMode, toggleViewMode }) => (
  <Style.Container id="projects-view">
    <Style.Title>Projects</Style.Title>
    <Style.DescriptionContainer>
      <Style.Description>
        Here are some notable projects (repositories) on my GitHub. Some are personal projects, while others are collaborative efforts where I contributed as part of a team. Check them out to see my skills in action!
      </Style.Description>
      <Style.ToggleButton onClick={toggleViewMode}>
        Switch to {viewMode === 'cards' ? 'List' : 'Cards'} View
      </Style.ToggleButton>
    </Style.DescriptionContainer>
    {viewMode === 'cards' ? <ProjectCards /> : <ProjectsList />}
  </Style.Container>
);

export default ProjectsView;
