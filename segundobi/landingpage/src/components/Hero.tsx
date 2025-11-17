import RectangleUm from "../assets/imagens/RectangleUm.png";
import RectangleDois from "../assets/imagens/RectangleDois.png";
import Button from "./Button";
import "../styles/hero.css";

export default function Hero() {
  return (
               <section id="hero">
                <span className="desktop-only">
                    <img src={RectangleDois} alt="Retangulo um tela inicial" />
                </span>
                <img src={RectangleUm} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <h1>Rápido, seguro e com garantia. É só pedir que buscamos no seu endereço.</h1>
                    <p>Já pensou em resolver o seu problema sem sair de casa? Nós buscamos, consertamos e entregamos seu aparelho funcionando como novo. Serviço profissional, transparente e 100% garantido.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
  );
}
