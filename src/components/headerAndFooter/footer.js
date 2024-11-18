import React from 'react';
import * as Style from './styles.style';

function Footer() {
  return (
    <Style.FooterContainer className="footer">
      <p>&copy; {new Date().getFullYear()} Yuval Rozner. All rights reserved.</p>
      <Style.FooterNav className="footer-navigation">
        <Style.FooterLink href="#about-me">About Me</Style.FooterLink>
        <Style.FooterLink href="#projects">Projects</Style.FooterLink>
        <Style.FooterLink href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
        </Style.FooterLink>
      </Style.FooterNav>
    </Style.FooterContainer>
  );
}

export default Footer;
