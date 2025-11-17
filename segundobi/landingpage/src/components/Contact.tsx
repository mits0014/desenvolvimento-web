import Button from "./Button";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
                <div className="container content">
                    <p className="desktop-only">
                        Envie sua dúvida 
                    </p>
                    <h1>ENTRE EM CONTATO</h1>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento,
                    uma dúvida técnica de algum de nossos produtos.Estamos à disposição para responder.
                    </p>
                    <form 
    className="form-contact" 
    id="form-contact"
    action="https://formsubmit.co/mlsilveira@minha.fag.edu.br"
    method="POST"
>

    <input 
        type="email" 
        name="email"
        placeholder="seu melhor e-mail" 
        required 
    />

    <input 
        type="text" 
        name="mensagem"
        placeholder="motivo do contato de forma breve" 
        required 
    />

    {/* Campos de configuração do FormSubmit */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="box" />
    <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

    <div className="flex gap-1">
        <span>
            <Button text="Enviar"></Button>
        </span>
    </div>
    </form>
                    
                </div>
            </section>
    
  );
}
