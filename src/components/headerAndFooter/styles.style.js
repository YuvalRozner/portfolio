import styled from 'styled-components';

export const TopBarContainer = styled.div`
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
`;

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
`;

export const HeaderParagraph = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

export const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
  text-align: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
`;

