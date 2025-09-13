import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Importando todos os componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Gallery from './components/Gallery/Gallery';

import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </ThemeProvider>
  );
}

export default App;
