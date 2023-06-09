import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { HeroArea } from './components/HeroArea/HeroArea';
import { CompanyStatistics } from './components/CompanyStatistics/CompanyStatistics';
import { OurPromise } from './components/OurPromise/OurPromise';
import { ServiceBanner } from './components/ServiceBanner/ServiceBanner';
import { SupportImage } from './components/SupportImage/SupportImage';
import { CtaBanner } from './components/CtaBanner/CtaBanner';
import { Footer } from './components/Footer/Footer';

import ux from './assets/images/ux.svg';
import designTeam from './assets/images/designTeam.svg';
import mobileDevelopment from './assets/images/mobileDevelopment.svg';
import webDevelopment from './assets/images/web.svg';

function App() {
  return (
    <>
     <Navbar />
     <HeroArea />
     <CompanyStatistics />
     <OurPromise />
      <section className='banner'>
        <h2>Nossos Serviços</h2>
          <p>Descubra a excelência dos nossos serviços e deixe-nos cuidar das suas necessidades com expertise e dedicação.</p>
      </section>
     <ServiceBanner
     title="UI/UX Design"
     paragraph="Na nossa empresa, oferecemos serviços especializados de UI/UX design para ajudar a impulsionar o seu negócio digital. Nossa equipe de designers experientes está pronta para transformar suas ideias em interfaces visualmente atraentes e intuitivas, proporcionando uma experiência excepcional aos seus usuários."
    >
      <SupportImage className="banner-image" src={ux} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     className='banner-container--blue'
     title="Web Design"
     paragraph="Oferecemos soluções de web design personalizadas que não apenas capturam a essência da sua marca, mas também criam uma experiência envolvente para os visitantes do seu site. Criamos designs cativantes que combinam estética visual, usabilidade intuitiva e funcionalidade avançada."
    >
      <SupportImage className="banner-image" src={designTeam} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     title="Desenvolvimento Web"
     paragraph="Nossa equipe de desenvolvedores especializados está pronta para enfrentar qualquer desafio e criar um site ou aplicativo da web de alta qualidade, adaptado às suas necessidades específicas. Trabalhamos com uma ampla gama de tecnologias modernas e frameworks, garantindo que o resultado final seja robusto, seguro e altamente escalável."
    >
      <SupportImage className="banner-image" src={webDevelopment} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     className='banner-container--blue'
     title="Desenvolvimento de Aplicativos Móveis"
     paragraph="Se você tem uma ideia inovadora para um aplicativo móvel, nosso serviço de Desenvolvimento de Aplicativos Móveis está aqui para transformá-la em realidade. Nossa equipe de desenvolvedores altamente qualificados e experientes é especializada na criação de aplicativos móveis de ponta, adaptados às plataformas iOS e Android. "
    >
      <SupportImage className="banner-image" src={mobileDevelopment} alt="team" />
    </ServiceBanner>
    <CtaBanner />
    <Footer />
    </>
  )
}

export default App
