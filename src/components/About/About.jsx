import { FaDumbbell, FaUsers, FaClock, FaTrophy } from 'react-icons/fa';
import { Container, Title } from '../../styles/GlobalStyles';
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutImage,
  StatsContainer,
  StatCard
} from './About.styles';

const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <Title>Sobre a Performance Master</Title>
        <AboutContent>
          <AboutText>
            <h3>Sua jornada fitness começa aqui</h3>
            <p>
              Na Performance Master, acreditamos que cada pessoa tem o potencial para 
              alcançar sua melhor versão. Com mais de 10 anos de experiência, oferecemos 
              um ambiente completo e acolhedor para sua transformação.
            </p>
            <p>
              Nossa equipe de profissionais qualificados está pronta para te orientar 
              em cada passo da sua jornada, seja você iniciante ou atleta experiente.
            </p>
            <p>
              Equipamentos de última geração, aulas diversificadas e um ambiente 
              motivador fazem da Performance Master o lugar ideal para você conquistar 
              seus objetivos de saúde e bem-estar.
            </p>
          </AboutText>
          <AboutImage>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Academia Performance Master" 
            />
          </AboutImage>
        </AboutContent>

        <StatsContainer>
          <StatCard>
            <FaUsers className="icon" />
            <h4>2000+</h4>
            <p>Alunos Ativos</p>
          </StatCard>
          <StatCard>
            <FaDumbbell className="icon" />
            <h4>500+</h4>
            <p>Equipamentos</p>
          </StatCard>
          <StatCard>
            <FaClock className="icon" />
            <h4>18h</h4>
            <p>Horas de Funcionamento</p>
          </StatCard>
          <StatCard>
            <FaTrophy className="icon" />
            <h4>10+</h4>
            <p>Anos de Experiência</p>
          </StatCard>
        </StatsContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;
