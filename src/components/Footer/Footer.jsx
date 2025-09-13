import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #ff6b35;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p, li {
    font-family: 'Poppins', sans-serif;
    color: #bdc3c7;
    line-height: 1.8;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
  }

  a {
    color: #bdc3c7;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b35;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;

  .icon {
    color: #ff6b35;
    font-size: 1.1rem;
    width: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff6b35;
    transition: all 0.3s ease;

    &:hover {
      background: #ff6b35;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 2rem;
  text-align: center;
  color: #7f8c8d;
`;

const Logo = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Footer = () => {

  //data
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer id="contact">
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>Performance Master</Logo>
            <p>
              Transformando vidas através do fitness há mais de 10 anos. 
              Venha fazer parte da nossa família e descubra seu potencial máximo.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contato</h3>
            <ContactItem>
              <FaMapMarkerAlt className="icon" />
              <span>Rua das Flores, 123 - Centro<br />São Paulo - SP</span>
            </ContactItem>
            <ContactItem>
              <FaPhone className="icon" />
              <span>(11) 9999-9999</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope className="icon" />
              <span>contato@performancemaster.com.br</span>
            </ContactItem>
          </FooterSection>

          <FooterSection>
            <h3>Horário de Funcionamento</h3>
            <ContactItem>
              <FaClock className="icon" />
              <div>
                <div>Segunda a Sexta: 05:00 - 23:00</div>
                <div>Sábado: 06:00 - 20:00</div>
                <div>Domingo: 08:00 - 18:00</div>
              </div>
            </ContactItem>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {currentYear} Performance Master. Todos os direitos reservados.</p>
          <p>Desenvolvido por Carlos Resende</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
