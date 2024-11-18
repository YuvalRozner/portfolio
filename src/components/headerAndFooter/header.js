import React from 'react';
import * as Style from './styles.style';

const Header = () => {
  return (
    <Style.HeaderContainer className="portfolio-header">
      <Style.ProfileImage 
        src="\images\yuval.png" 
        alt="Yuval Rozner" 
      />
      <Style.HeaderTitle>Hi, I'm Yuval Rozner <span role="img" aria-label="waving hand">👋</span></Style.HeaderTitle>
      <Style.HeaderParagraph>
        Welcome to my portfolio! I'm a passionate Software Engineering student eager to make an impact in the tech world.
      </Style.HeaderParagraph>
    </Style.HeaderContainer>
  );
};

export default Header;
