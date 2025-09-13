import styled, { keyframes } from 'styled-components';
import { Section, Button } from '../../styles/GlobalStyles';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const CTAContainer = styled(Section)`
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(255, 107, 53, 0.9)),
              url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-align: center;
  padding: 100px 0;
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
`;

export const CTASubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WhatsAppButton = styled(Button)`
  background: #25d366;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #20b85a;
  }
`;

export const PhoneButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: white;
    color: #2c3e50;
  }
`;

export const OfferBadge = styled.div`
  font-family: 'Oswald', sans-serif;
  background: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  display: inline-block;
  animation: ${pulse} 2s infinite;
`;