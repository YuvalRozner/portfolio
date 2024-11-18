import styled from 'styled-components';

export const Section = styled.section`
  padding: 25px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const FocusedProjectCard = styled.div`
  margin-bottom: 25px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const MiniProjectList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

export const MiniProjectItem = styled.li`
  cursor: pointer;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  min-width: 160px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-width: 160px;
  max-height: 160px;
`;

export const ProjectTitle = styled.h3`
  margin: 12px 0;
  color: #222;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  color: #555;
  margin: 5px 0;
  line-height: 1.5;
`;

export const ProjectLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: #1e90ff;
  }
`;
