import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { HeroArea } from './components/HeroArea/HeroArea';
import { CompanyStatistics } from './components/CompanyStatistics/CompanyStatistics';
import { OurPromise } from './components/OurPromise/OurPromise';

function App() {
  return (
    <>
     <Navbar />
     <HeroArea />
     <CompanyStatistics />
     <OurPromise />
    </>
  )
}

export default App
