import React from 'react';
import * as Style from './styles.style';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons from react-icons
import contactData from '../../data/contactData.json'; // Import contact data

function Footer() {
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
    <Style.FooterContainer className="footer">
      <p>&copy; {new Date().getFullYear()} Yuval Rozner. All rights reserved.</p>
      <Style.FooterNav className="footer-navigation">
        <Style.FooterLink href="#about-me" onClick={(e) => handleNavigationClick(e, 'about-me')}>About Me</Style.FooterLink>
        <Style.FooterLink href="#projects" onClick={(e) => handleNavigationClick(e, 'projects-view')}>Projects</Style.FooterLink>
        <Style.FooterLink href="#contact" onClick={(e) => handleNavigationClick(e, 'contact')}>Contact</Style.FooterLink>
        <Style.FooterLink href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin aria-label="LinkedIn" /> LinkedIn
        </Style.FooterLink>
        <Style.FooterLink href={contactData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-label="GitHub" /> GitHub
        </Style.FooterLink>
      </Style.FooterNav>
    </Style.FooterContainer>
  );
}

export default Footer;
