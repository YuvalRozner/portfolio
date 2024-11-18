import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #333;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 10px;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProjectImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
  float: left;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 5px 0;
`;

export const ProjectLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
`;

export const ProjectDescription = styled.p`
  color: #666;
  margin: 0;
`;

export const FooterDescription = styled.p`
  color: #666;
  margin-top: 20px;
`;