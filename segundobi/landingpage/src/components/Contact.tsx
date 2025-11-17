import "../styles/contact.css";
import { useState } from "react";
import emailJs from "@emailjs/browser";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_email: email,
            message: message,
        };
        

        emailJs.send("service_4x6aahq", "template_ajm16az", templateParams, "nCyxBqmllhBdwJ7ex")
            .then((response) => {
                console.log("E-mail enviado com sucesso!", response.status, response.text);
                alert("Mensagem enviada com sucesso!");
            })
            .catch((err) => {
                console.error("Erro ao enviar e-mail:", err);
                alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
            });
    }

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
                <form className="form-contact" id="form-contact" onSubmit={sendEmail}>


                    <input 
                        className="input-text"
                        type="email"
                        name="email"
                        placeholder="seu melhor e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="input-text"
                        type="text"
                        name="mensagem"
                        placeholder="motivo do contato de forma breve"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />

                    {/* Campos de configuração do FormSubmit */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

                    <div className="flex gap-1">
                        <span>
                            <input type="submit" value="ENVIAR MENSAGEM" className="btn-primary" />
                        </span>
                    </div>
                </form>

            </div>
        </section>

    );
}
