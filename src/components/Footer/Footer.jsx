import './Footer.css';
import { RiTeamFill } from 'react-icons/ri';
import { MdGppGood, MdOutlineAttachMoney } from 'react-icons/md';
export const Footer = () => {
  return (
    <div className="footer">
        <h2 className="footer-title">Trabalhe Conosco e Tenha o Melhor em Serviços de TI</h2>
        <p>Estamos prontos para transformar sua visão em realidade e fornecer resultados excepcionais que impulsionarão o sucesso do seu negócio online.</p>
        <section className="reasons">
            <div>
                <MdGppGood className="reasons-icon"/>
                <p>Alta Qualidade</p>
            </div>
            <div>
                <RiTeamFill className="reasons-icon"/>
                <p>Equipe Excelente</p>
            </div>
            <div>
                <MdOutlineAttachMoney className="reasons-icon"/>
                <p>Bom Preço</p>
            </div>
        </section>
    </div>
  )
}
