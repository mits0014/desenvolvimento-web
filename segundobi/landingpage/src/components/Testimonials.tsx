import "../styles/testimonials.css";
import testemunhadois from "../assets/testemunhadois.png"
import testemunhatres from "../assets/testemunhatres.png"
import estrela_cheia from "../assets/estrela_cheia.png"
import estrela_vazia from "../assets/estrela_vazia.png"

export default function Testimonials() {
    return (
        <section id="testimonials">
            <header>
                <span>
                    <p className="desktop-only">
                        Conselho de quem conhece
                    </p>
                    <h2>Cada cliente importa!</h2>
                </span>
                <p>
                    Quem já utilizou nossos serviços sabe da qualidade e do cuidado que temos com cada aparelho. Estamos mudando a ideia de que assistência técnica precisa ser demorada ou complicada. Acompanhe abaixo a opinião de quem já confiou na gente — e aprovou.
                </p>
            </header>
            <section className="carousel">
                <div className="carousel-content">
                    <div className="carousel-card">
                        <img src={testemunhatres} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Achei que meu celular não tinha mais solução. Eles buscaram em casa e entregaram perfeito!
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={testemunhadois} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Transparência total. Recebi orçamento antes e paguei só depois do serviço.
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={testemunhatres} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Rápidos e muito profissionais. Já virei cliente fixo.
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                </div>
                <div className="carousel-content">
                    <div className="carousel-card">
                        <img src={testemunhatres} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Certamente o mercado chinês de eletricos está bombando, só existe
                                uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={testemunhadois} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Certamente o mercado chinês de eletricos está bombando, só existe
                                uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={testemunhatres} alt="Imagem perfil cliente" />
                        <span className="testimony">
                            <p>
                                Certamente o mercado chinês de eletricos está bombando, só existe
                                uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                            </p>
                        </span>
                        <span className="rating">
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_cheia} alt="ícone estrela" width={22} height={20} />
                            <img src={estrela_vazia} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Ellon Ma</p>
                            <p>CEO BING CHILLING</p>
                        </span>
                    </div>
                </div>
            </section>

        </section>
    );
}
