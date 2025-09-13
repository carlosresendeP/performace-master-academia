import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButtons,
  WhatsAppButton,
  PhoneButton,
  OfferBadge
} from './CTA.styles';

const CTA = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Vi a oferta especial da Performance Master e gostaria de conhecer mais sobre os planos e começar minha transformação hoje!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callPhone = () => {
    window.open('tel:+5511999999999', '_self');
  };

  return (
    <CTAContainer>
      <Container>
        <CTAContent>
          <OfferBadge>🔥 OFERTA ESPECIAL 🔥</OfferBadge>
          <CTATitle>
            Comece Sua Transformação Hoje!
          </CTATitle>
          <CTASubtitle>
            Primeira semana GRÁTIS para novos alunos! Não perca esta oportunidade 
            única de conhecer nossa estrutura completa e começar sua jornada fitness.
          </CTASubtitle>
          <CTAButtons>
            <WhatsAppButton onClick={openWhatsApp}>
              <FaWhatsapp /> WhatsApp
            </WhatsAppButton>
            <PhoneButton onClick={callPhone}>
              <FaPhone /> (11) 9999-9999
            </PhoneButton>
          </CTAButtons>
        </CTAContent>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
