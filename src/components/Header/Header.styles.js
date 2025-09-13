import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b35;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 912px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(44, 62, 80, 0.98);
    flex-direction: column;
    padding: 2rem;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

export const NavItem = styled.li`
  a {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff6b35;
    }

    @media (max-width: 768px){
        font-size: 0.8rem
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 912px) {
    display: block;
  }
`;