import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FocusedProjectCard = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MiniProjectList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap; /* Ensure items wrap to the next line on smaller screens */
`;

export const MiniProjectItem = styled.li`
  cursor: pointer;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  transition: transform 0.2s;
  min-width: 150px; /* Ensure a minimum width for each item */
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  max-width: 150px; /* Limit the size of the images */
  max-height: 150px; /* Limit the size of the images */
`;

export const ProjectTitle = styled.h3`
  margin: 10px 0;
  color: #333;
`;

export const ProjectDescription = styled.p`
  color: #666;
  margin: 0;
`;

export const ProjectLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;
