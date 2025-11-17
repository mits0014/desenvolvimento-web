import logo from "../assets/logo.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import "../styles/headers.css";
import "../styles/utilitys.css";
import "../styles/Home.css";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import "../styles/hero.css";
import "../styles/solution.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Solution from "../components/Solution";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>

                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#login" className="reverse-color" >Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <Hero></Hero>
            <Solution></Solution>
            <Testimonials></Testimonials>
            <Pricing></Pricing>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )

}