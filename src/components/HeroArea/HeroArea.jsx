import './HeroArea.css';
import { Button } from '../Button/Button';
import { SupportImage } from '../SupportImage/SupportImage';

export const HeroArea = () => {
    return (
        <header>
          <main className="header-text">
            <h1 className="text-title">Nós Construímos Suas Aplicações de <span>Sucesso</span>
            </h1>
            <h2 className="text-subtitle">Seu parceiro de desenvolvimento confiável | Entregando projetos no prazo | Suporte excepcional ao cliente</h2>
            <p>Ajudamos a construir o seu negócio com a mais recente tecnologia. Você está convidado a contratar serviços de alta qualidade para WordPress, Desenvolvimento Web, Web Design, UI/UX Design, etc.</p>
          <section className="cta">
            <Button className="cta-works" text="Conheça nosso trabalhos" />
            <Button className="cta-contact" text="Entre em contato conosco" />
          </section>
          </main>
        <SupportImage />
        </header>
    )
}

