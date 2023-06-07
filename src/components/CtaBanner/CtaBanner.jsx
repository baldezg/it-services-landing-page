import { Button } from "../Button/Button";
import './CtaBanner.css';

export const CtaBanner = () => {
  return (
    <div className='container-background'>
        <div className='container-top bg-blue'></div>
        <div className='container cta-banner'>
           <h2>Entre em contato conosco hoje e garanta o seu serviço com qualidade e excelência</h2>
           <Button className="cta-consultation" text="Orçamento Grátis" />
        </div>
         <div className='container-bottom navy-blue'></div>
        </div>
  )
}
