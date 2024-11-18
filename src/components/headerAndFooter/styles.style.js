import styled from 'styled-components';

export const TopBarContainer = styled.div`
  background-color: #1f2430;
  padding: 10px 25px; /* Reduced padding to make the topBar thinner */
  color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  width: calc(100% - 50px); /* Adjust width to prevent overflow */
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: #61dafb;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: #f0f0f0;
  }
`;

export const HeaderContainer = styled.header`
  background-color: #1f2430;
  padding: 20px;
  color: #f0f0f0;
  text-align: center;
  margin-top: 60px; /* Adjust for fixed TopBar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 25px;
  width: 160px;
  height: 160px;
  border: 3px solid #61dafb;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

export const HeaderParagraph = styled.p`
  font-size: 1.3em;
  margin-top: 15px;
  line-height: 1.5;
`;

export const FooterContainer = styled.footer`
  background-color: #1f2430;
  padding: 5px 25px;
  color: #f0f0f0;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: #f0f0f0;
  }
`;
