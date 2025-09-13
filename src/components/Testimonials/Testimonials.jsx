import styled from 'styled-components';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Container, Section, Title } from '../../styles/GlobalStyles';

const TestimonialsContainer = styled(Section)`
  background: #f8f9fa;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  .quote-icon {
    position: absolute;
    top: -10px;
    left: 2rem;
    background: #ff6b35;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
  
  .name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
  }
  
  .role {
    color: #666;
    font-size: 0.9rem;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-left: auto;
  
  .star {
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      text: "A Performance Master mudou completamente minha vida! Em 6 meses consegui perder 15kg e ganhar muita disposição. Os professores são incríveis e o ambiente é super motivador.",
      author: "Maria Silva",
      role: "Estudante",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "Treino aqui há 2 anos e posso dizer que é a melhor academia da região. Equipamentos sempre novos, limpeza impecável e profissionais altamente qualificados.",
      author: "João Santos",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "Como personal trainer, escolhi a Performance Master para trabalhar porque sei da qualidade dos equipamentos e do ambiente. Meus alunos adoram treinar aqui!",
      author: "Ana Paula",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      text: "A piscina é incrível! Faço natação há 3 anos aqui e a estrutura é de primeira. As aulas são muito bem organizadas e os professores são excelentes.",
      author: "Carlos Mendes",
      role: "Aposentado",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <Title>O Que Nossos Alunos Dizem</Title>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <FaQuoteLeft className="quote-icon" />
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src={testimonial.image} alt={testimonial.author} />
                </AuthorImage>
                <AuthorInfo>
                  <div className="name">{testimonial.author}</div>
                  <div className="role">{testimonial.role}</div>
                </AuthorInfo>
                <StarsContainer>
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="star" />
                  ))}
                </StarsContainer>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
