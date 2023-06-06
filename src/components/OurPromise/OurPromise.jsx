import './OurPromise.css';
import  { AiFillLike } from 'react-icons/ai';
import { MdOutlineAttachMoney, MdSupportAgent, MdPriceCheck } from 'react-icons/md';
import { SiAnswer } from 'react-icons/si';

export const OurPromise = () => {
    return (
        <div className='our-promise'>
        <h2>Nosso Compromisso</h2>
        <p>Nosso compromisso é oferecer serviços de TI, web design e desenvolvimento de alta qualidade para nossos clientes. Nossa promessa é fornecer soluções tecnológicas inovadoras, personalizadas e eficientes, que impulsionam o crescimento e o sucesso de seus negócios.</p>
        <div className='promise-container'>
            <div className='promise-card'>
                <AiFillLike className='promise-icon'/>
                <h3>Satisfação Garantida</h3>
            </div>
            <div className='promise-card'>
                <MdOutlineAttachMoney className='promise-icon'/>
                <h3>Garantia de reembolso</h3>
            </div>
            <div className='promise-card'>
                <SiAnswer className='promise-icon'/>
                <h3>Respostas rápidas</h3>
            </div>
            <div className='promise-card'>
                <MdSupportAgent className='promise-icon'/>
                <h3>Suporte Personalizado</h3>
            </div>
            <div className='promise-card'>
                <MdPriceCheck className='promise-icon'/>
                <h3>Preços Acessíveis</h3>
            </div>
        </div>
        </div>
        
    )
}