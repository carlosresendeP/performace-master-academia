import { FaCheck, FaStar } from 'react-icons/fa';
import { Container, Title } from '../../styles/GlobalStyles';
import {
  PricingContainer,
  PricingGrid,
  PricingCard,
  PopularBadge,
  PlanName,
  PlanPrice,
  FeaturesList,
  Feature,
  PricingButton
} from './Pricing.styles';

const Pricing = () => {
  const openWhatsAppWithPlan = (planName, planPrice) => {
    const phoneNumber = "5511999999999";
    const message = `Olá! Quero o plano *${planName}* (${planPrice}/mês) da Performance Master!\n\nPodemos conversar sobre os detalhes e como começar minha jornada fitness?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      name: "Básico",
      price: "R$ 89",
      period: "/mês",
      features: [
        "Acesso à musculação",
        "Zona de cardio",
        "Vestiário completo",
        "Estacionamento grátis",
        "Horário comercial"
      ],
      featured: false
    },
    {
      name: "Premium",
      price: "R$ 149",
      period: "/mês",
      features: [
        "Tudo do plano Básico",
        "Aulas em grupo ilimitadas",
        "Acesso 24 horas",
        "Personal training (2x/mês)",
        "Avaliação física gratuita",
        "Desconto na loja"
      ],
      featured: true
    },
    {
      name: "Master",
      price: "R$ 199",
      period: "/mês",
      features: [
        "Tudo do plano Premium",
        "Personal training ilimitado",
        "Acesso à piscina",
        "Aulas de artes marciais",
        "Nutricionista (consulta mensal)",
        "Massagem relaxante (2x/mês)"
      ],
      featured: false
    }
  ];

  return (
    <PricingContainer id="pricing">
      <Container>
        <Title>Planos e Preços</Title>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index} featured={plan.featured}>
              {plan.featured && (
                <PopularBadge>
                  <FaStar /> Mais Popular
                </PopularBadge>
              )}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                <div className="price">{plan.price}</div>
                <div className="period">{plan.period}</div>
              </PlanPrice>
              <FeaturesList>
                {plan.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>
                    <FaCheck className="icon" />
                    <span>{feature}</span>
                  </Feature>
                ))}
              </FeaturesList>
              <PricingButton 
                featured={plan.featured}
                onClick={() => openWhatsAppWithPlan(plan.name, plan.price)}
              >
                Escolher Plano
              </PricingButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingContainer>
  );
};

export default Pricing;
