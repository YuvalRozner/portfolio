import React from 'react';
import * as Style from './styles.style';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons
import contactData from '../../data/contactData.json'; // Import contact data

function TopBar() {
  const handleNavigationClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100; // Adjust this value to set how much above the start you want to scroll
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      targetElement.focus({ preventScroll: false });
    }
  };

  return (
    <Style.TopBarContainer>
      <Style.Logo title="Yuval Rozner's Portfolio" onClick={(e) => handleNavigationClick(e, 'head')}>
        Yuval Rozner
      </Style.Logo>
      <Style.Navigation>
        <Style.NavLink href="#about-me" onClick={(e) => handleNavigationClick(e, 'about-me')} title="Go to About Me section">About Me</Style.NavLink>
        <Style.NavLink href="#projects" onClick={(e) => handleNavigationClick(e, 'projects-view')} title="Go to Projects section">Projects</Style.NavLink>
        <Style.NavLink href="#contact" onClick={(e) => handleNavigationClick(e, 'contact')} title="Go to Contact section">Contact</Style.NavLink>
        <Style.NavLink href={contactData.cv} download title="Download my CV">Download CV</Style.NavLink>
        <Style.NavLink href={contactData.linkedin} target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile">
          <FaLinkedin aria-label="LinkedIn" /> LinkedIn
        </Style.NavLink>
      </Style.Navigation>
    </Style.TopBarContainer>
  );
}

export default TopBar;
