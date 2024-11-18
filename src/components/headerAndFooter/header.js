import React, { useState } from 'react';
import * as Style from './styles.style';
import * as TextContent from '../../data/contentData';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Style.HeaderContainer className="portfolio-header" id="head">
      <Style.ProfileImage 
        src="\images\yuval.png" 
        alt={TextContent.HEADER_MY_NAME} 
        onClick={handleImageClick}
      />
      <Style.HeaderTitle>Hi, I'm {TextContent.HEADER_MY_NAME} <span role="img" aria-label="waving hand">👋</span></Style.HeaderTitle>
      <Style.HeaderParagraph>
        {TextContent.HEADER_SUBTITLE}
      </Style.HeaderParagraph>
      {isModalOpen && (
        <Style.Modal>
          <Style.ModalContent>
            <Style.CloseButton onClick={handleCloseModal}>x</Style.CloseButton>
            <img src="\images\yuval.png" alt={TextContent.HEADER_MY_NAME} style={{ width: '100%' }} />
          </Style.ModalContent>
        </Style.Modal>
      )}
    </Style.HeaderContainer>
  );
};

export default Header;
