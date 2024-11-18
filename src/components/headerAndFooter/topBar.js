import React from 'react';
import * as Style from './styles.style';

function TopBar() {
  return (
    <Style.TopBarContainer>
      <Style.Logo>
        Yuval Rozner
      </Style.Logo>
      <Style.Navigation>
        <Style.NavLink href="#about-me">About Me</Style.NavLink>
        <Style.NavLink href="#projects">Projects</Style.NavLink>
        <Style.NavLink href="https://www.linkedin.com/in/yuval-rozner/" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
        </Style.NavLink>
      </Style.Navigation>
    </Style.TopBarContainer>
  );
}

export default TopBar;
