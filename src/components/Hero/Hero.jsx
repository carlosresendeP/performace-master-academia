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
          <Button>Comece Agora</Button>
          <VideoButton>
            <FaPlay /> Assistir Vídeo
          </VideoButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
