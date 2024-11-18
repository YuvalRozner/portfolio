import React from 'react';
import * as Style from './about.style';

const About = () => {
  return (
    <Style.AboutSection className="about-me" id="about-me">
      <Style.AboutTitle>About Me</Style.AboutTitle>
      <Style.AboutParagraph>
        I'm a motivated <strong>Software Engineering student</strong> in my final semester at Braude College of Engineering. With a strong foundation in programming, problem-solving, and teamwork, I'm eager to contribute to innovative projects and further develop my skills in real-world applications.
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
