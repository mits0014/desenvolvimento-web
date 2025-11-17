import Button from "./Button";
import "../styles/pricing.css";
import Check from "../assets/Check.png"

export default function Pricing() {
    return (
        <section id="pricing" className="container">
            <header>
                <p className="desktop-only">Planos e preços</p>
                <h2>Nossos planos</h2>
            </header>
            <section className="even-columns gap-1.5">
                <div className="pricing-card">
                    <span className="plan">
                        <h3>Serviços Avulsos</h3>
                        <p>
                            Para reparos pontuais.
                        </p>
                    </span>
                    <h2>Variavel</h2>
                    <Button text="Pedir agora" secondary key="free" />
                    <span className="hr" /><span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Diagnóstico gratuito</p>
                    </span>
                    <ul className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Orçamento transparente</p>
                    </ul>
                </div>
                <div className="pricing-card premium">
                    <span className="bonus">
                        <p>1º MÊS COM DESCONTO</p>
                    </span>
                    <span className="plan">
                        <h3>Plano Plus</h3>
                        <p>Para quem quer manter seus dispositivos sempre em dia.</p>
                    </span>
                    <span className="price">
                        <h2>R$ 89,90</h2>
                        <p>/mês</p>
                    </span>
                    <Button text="Pedir agora" key="premium" />
                    <span className="hr" />
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Revisão semestral</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Limpeza interna</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Descontos exclusivos</p>
                    </span>
                </div>
                <div className="pricing-card">
                    <span className="plan">
                        <h3>Plano empresas</h3>
                        <p>
                            Plano pensado para empresas.
                        </p>
                    </span>
                    <h2>Sob Consulta</h2>
                    <Button text="Pedir agora" secondary key="free" />
                    <span className="hr" /><span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Suporte prioritário</p>

                    </span>

                    <ul className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Visitas técnicas</p>
                    </ul>
                </div>
            </section>
        </section>
    );
}
