import logo from "../assets/logo.svg";
import "../styles/footer.css";
import "../styles/utilitys.css";

export default function Footer() {
  return (
    <section id="footer">
      <div className="items-center footer container">
        <img src={logo} alt="Logo" width={220} height={80} />
        <p>© 2024 Voltzx. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}
