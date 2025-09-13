import { FaDumbbell, FaRunning, FaHeartbeat, FaUserFriends, FaSwimmer, FaFistRaised } from 'react-icons/fa';
import { Container, Title } from '../../styles/GlobalStyles';
import {
  ServicesContainer,
  ServicesGrid,
  ServiceCard
} from './Services.styles';

const Services = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: "Musculação",
      description: "Equipamentos de última geração para treinos de força e hipertrofia com acompanhamento profissional."
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardio Training",
      description: "Zona cardio completa com esteiras, bikes e elípticos para melhorar seu condicionamento físico."
    },
    {
      icon: <FaUserFriends />,
      title: "Aulas em Grupo",
      description: "Diversas modalidades como Zumba, Spinning, Pilates e muito mais em um ambiente motivador."
    },
    {
      icon: <FaRunning />,
      title: "Personal Training",
      description: "Treinos personalizados com profissionais qualificados para resultados mais rápidos e eficazes."
    },
    {
      icon: <FaFistRaised />,
      title: "Artes Marciais",
      description: "Aulas de boxe, muay thai e jiu-jitsu para quem busca disciplina e condicionamento físico."
    },
    {
      icon: <FaSwimmer />,
      title: "Natação",
      description: "Piscina semi-olímpica com aulas para todos os níveis, desde iniciantes até nadadores avançados."
    }
  ];

  return (
    <ServicesContainer id="services">
      <Container>
        <Title>Nossos Serviços</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
