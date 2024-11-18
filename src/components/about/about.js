import React from 'react';
import * as Style from './about.style';
import * as TextContent from '../../data/contentData';

const About = () => {
  return (
    <Style.AboutSection className="about-me" id="about-me">
      <Style.AboutTitle>{TextContent.NAVIGATION_LINKS.aboutMe}</Style.AboutTitle>
      <Style.AboutParagraph>
        {TextContent.ABOUT_ME_DESCRIPTION}
      </Style.AboutParagraph>
      <Style.AboutList>
        <Style.AboutListItem><span role="img" aria-label="graduation cap">🎓</span> GPA of 90.</Style.AboutListItem>
        <Style.AboutListItem><span role="img" aria-label="medal">🏅</span> Dean's List recipient twice.</Style.AboutListItem>
        <Style.AboutListItem><span role="img" aria-label="link">🔗</span> Find me on <Style.AboutLink href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer">LinkedIn</Style.AboutLink>.</Style.AboutListItem>
      </Style.AboutList>
    </Style.AboutSection>
  );
};

export default About;
