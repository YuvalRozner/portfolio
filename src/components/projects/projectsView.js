import React from 'react';
import ProjectsList from './projectsList';
import ProjectCards from './projectsCards';
import * as Style from './projectsView.style';
import * as TextContent from '../../data/contentData';

const ProjectsView = ({ viewMode, toggleViewMode }) => (
  <Style.Container id="projects-view">
    <Style.Title>{TextContent.PROJECTS_TITLE}</Style.Title>
    <Style.DescriptionContainer>
      <Style.Description>
        {TextContent.PROJECTS_DESCRIPTION}
      </Style.Description>
      <Style.ToggleButton onClick={toggleViewMode}>
        Switch to {viewMode === 'cards' ? 'List' : 'Cards'} View
      </Style.ToggleButton>
    </Style.DescriptionContainer>
    {viewMode === 'cards' ? <ProjectCards /> : <ProjectsList />}
  </Style.Container>
);

export default ProjectsView;
