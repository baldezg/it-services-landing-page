import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { HeroArea } from './components/HeroArea/HeroArea';
import { CompanyStatistics } from './components/CompanyStatistics/CompanyStatistics';
import { OurPromise } from './components/OurPromise/OurPromise';
import { ServiceBanner } from './components/ServiceBanner/ServiceBanner';
import { SupportImage } from './components/SupportImage/SupportImage';
import { CtaBanner } from './components/CtaBanner/CtaBanner';

import team from './assets/images/team.svg';

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
      <SupportImage className="banner-image" src={team} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     className='banner-container--blue'
     title="UI/UX Design"
     paragraph="Na nossa empresa, oferecemos serviços especializados de UI/UX design para ajudar a impulsionar o seu negócio digital. Nossa equipe de designers experientes está pronta para transformar suas ideias em interfaces visualmente atraentes e intuitivas, proporcionando uma experiência excepcional aos seus usuários."
    >
      <SupportImage className="banner-image" src={team} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     title="UI/UX Design"
     paragraph="Na nossa empresa, oferecemos serviços especializados de UI/UX design para ajudar a impulsionar o seu negócio digital. Nossa equipe de designers experientes está pronta para transformar suas ideias em interfaces visualmente atraentes e intuitivas, proporcionando uma experiência excepcional aos seus usuários."
    >
      <SupportImage className="banner-image" src={team} alt="team" />
    </ServiceBanner>
    <ServiceBanner
     className='banner-container--blue'
     title="UI/UX Design"
     paragraph="Na nossa empresa, oferecemos serviços especializados de UI/UX design para ajudar a impulsionar o seu negócio digital. Nossa equipe de designers experientes está pronta para transformar suas ideias em interfaces visualmente atraentes e intuitivas, proporcionando uma experiência excepcional aos seus usuários."
    >
      <SupportImage className="banner-image" src={team} alt="team" />
    </ServiceBanner>
    <CtaBanner />
    </>
  )
}

export default App
