import styled from 'styled-components';
import { Section } from '../../styles/GlobalStyles';

export const ServicesContainer = styled(Section)`
  background: white;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
    border-color: #ff6b35;
  }

  .icon {
    font-size: 3.5rem;
    color: #ff6b35;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 1rem;
  }
`;