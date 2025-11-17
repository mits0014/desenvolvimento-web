import Champion from "../assets/Champion.png";
import "../styles/solution.css";

export default function Solution() {
  return (
   <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Serviços que oferecemos
🔧 Conserto de Smartphones

Troca de tela, bateria, conector, câmeras, placa e muito mais.

💻 Manutenção de Notebooks

Formatação, otimização, limpeza interna, upgrades, troca de teclado, tela e SSD.

🎧 Reparo de Acessórios

Fones, caixas de som, smartwatch, controles, consoles e periféricos.

🚗 Retirada e Entrega em Domicílio

Você não precisa sair de casa — buscamos o aparelho, reparamos e devolvemos no prazo combinado.
                    </p>
                    <section className="even-columns">
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Prêmio QualiTech 2024 – Assistência Destaque
                                </h3>
                                <p>
                                   Reconhecimento nacional pelo alto índice de reparos bem-sucedidos e pelo uso de técnicas avançadas de diagnóstico eletrônico.
A Voltzx foi premiada por manter um padrão de qualidade acima da média do setor.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Selo Cliente Ouro – Melhor Avaliação em Suporte
                                </h3>
                                <p>
                                  Premiação concedida a empresas com taxa de satisfação acima de 98%.
A Voltzx se destacou pelo atendimento humano, transparente e pela política de orçamento justo — sem surpresas para o cliente.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    TechForward Awards 2025 – Inovação
                                </h3>
                                <p>
                                   Reconhecimento dado a empresas que oferecem serviços modernos e convenientes.  Voltzx recebeu o prêmio pela implementação do sistema de retirada e entrega em domicílio, acelaerando o processo para o cliente.
                                </p>
                                <hr />
                            </div>
                        </div>
                    </section>
                </header>
            </section>
  );
}
