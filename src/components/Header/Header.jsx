import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  MenuToggle
} from './Header.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Performance Master</Logo>
        <NavList $isOpen={isMenuOpen}>
          <NavItem><a href="#home" onClick={closeMenu}>Home</a></NavItem>
          <NavItem><a href="#about" onClick={closeMenu}>Sobre</a></NavItem>
          <NavItem><a href="#services" onClick={closeMenu}>Serviços</a></NavItem>
          <NavItem><a href="#pricing" onClick={closeMenu}>Preços</a></NavItem>
          <NavItem><a href="#gallery" onClick={closeMenu}>Galeria</a></NavItem>
          {/* <NavItem><a href="#testimonials" onClick={closeMenu}>Depoimentos</a></NavItem> */}
          <NavItem><a href="#contact" onClick={closeMenu}>Contato</a></NavItem>
        </NavList>
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
