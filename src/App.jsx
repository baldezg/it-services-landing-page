import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { HeroArea } from './components/HeroArea/HeroArea';
import { CompanyStatistics } from './components/CompanyStatistics/CompanyStatistics';

function App() {
  return (
    <>
     <Navbar />
     <HeroArea />
     <CompanyStatistics />
    </>
  )
}

export default App
