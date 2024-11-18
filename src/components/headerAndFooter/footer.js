import React from 'react';
import * as Style from './styles.style';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons from react-icons
import contactData from '../../data/contactData.json'; // Import contact data
import * as TextContent from '../../data/contentData'; // Import content data

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
      <p>&copy; {new Date().getFullYear()} {TextContent.HEADER_MY_NAME}. {TextContent.FOOTER_TEXT}</p>
      <Style.FooterNav className="footer-navigation">
        <Style.FooterLink href="#about-me" onClick={(e) => handleNavigationClick(e, 'about-me')}>{TextContent.NAVIGATION_LINKS.aboutMe}</Style.FooterLink>
        <Style.FooterLink href="#projects" onClick={(e) => handleNavigationClick(e, 'projects-view')}>{TextContent.NAVIGATION_LINKS.projects}</Style.FooterLink>
        <Style.FooterLink href="#contact" onClick={(e) => handleNavigationClick(e, 'contact')}>{TextContent.NAVIGATION_LINKS.contact}</Style.FooterLink>
        <Style.FooterLink href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin aria-label="LinkedIn" /> {TextContent.NAVIGATION_LINKS.linkedIn}
        </Style.FooterLink>
        <Style.FooterLink href={contactData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-label="GitHub" /> GitHub
        </Style.FooterLink>
      </Style.FooterNav>
    </Style.FooterContainer>
  );
}

export default Footer;
