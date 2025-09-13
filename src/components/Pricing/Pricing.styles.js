import styled from 'styled-components';
import { Section, Button } from '../../styles/GlobalStyles';

export const PricingContainer = styled(Section)`
  background: #f8f9fa;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const PricingCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
    flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  border: ${props => props.featured ? '3px solid #ff6b35' : '1px solid #f0f0f0'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PlanName = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const PlanPrice = styled.div`
  margin-bottom: 2rem;
  
  .price {
    font-size: 3rem;
    font-weight: 700;
    color: #ff6b35;
  }
  
  .period {
    color: #666;
    font-size: 1rem;
  }
`;

export const FeaturesList = styled.ul`
  margin-bottom: 2rem;
  text-align: left;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  
  .icon {
    color: #27ae60;
    font-size: 1rem;
  }
  
  span {
    color: #555;
    font-size: 1rem;
  }
`;

export const PricingButton = styled(Button)`
  width: 100%;
  background: ${props => props.featured ?
        'linear-gradient(135deg, #ff6b35, #f7931e)' :
        'linear-gradient(135deg, #2c3e50, #34495e)'
    };
`;