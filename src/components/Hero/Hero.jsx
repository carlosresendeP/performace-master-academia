import { FaPlay } from 'react-icons/fa';
import { Button } from '../../styles/GlobalStyles';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  VideoButton
} from './Hero.styles';

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openVideo = () => {
    // Aqui você pode adicionar a URL do vídeo da academia
    // Por exemplo: window.open('https://youtube.com/watch?v=VIDEO_ID', '_blank');
    alert('Vídeo em breve! Entre em contato para conhecer nossa estrutura.');
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle>
          Transforme Seu Corpo na <span style={{color: '#ff6b35'}}>Performance Master</span>
        </HeroTitle>
        <HeroSubtitle>
          A academia mais completa da região com equipamentos de última geração, 
          profissionais qualificados e um ambiente motivador para você alcançar seus objetivos.
        </HeroSubtitle>
        <HeroButtons>
          <Button onClick={scrollToPricing}>Comece Agora</Button>
          <VideoButton onClick={openVideo}>
            <FaPlay /> Assistir Vídeo
          </VideoButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
