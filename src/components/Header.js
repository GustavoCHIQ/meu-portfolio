"use client"; // Adicione isso no topo do arquivo para usar hooks do React

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import '../css/style.css';
import '../css/utilities.css';

export default function Header() {
  useEffect(() => {
    // Lógica do menu de hambúrguer
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", mobileMenu);
    }

    // Fechar menu ao clicar em um link
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((n) => {
      n.addEventListener("click", () => {
        if (hamburger && navMenu) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }
      });
    });

    // Lógica do tema escuro
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    const switchTheme = (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    };

    if (toggleSwitch) {
      toggleSwitch.addEventListener("change", switchTheme, false);
    }

    // Carregar tema salvo
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark" && toggleSwitch) {
        toggleSwitch.checked = true;
      }
    }

    // Limpeza dos event listeners ao desmontar o componente
    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", mobileMenu);
      }
      navLink.forEach((n) => n.removeEventListener("click", closeMenu));
      if (toggleSwitch) {
        toggleSwitch.removeEventListener("change", switchTheme);
      }
    };
  }, []);

  return (
    <header id="hero" className="flex flex-col h-full">
      <nav className="navbar fixed top-0 left-0 right-0 z-20 bg-primary">
        <div className="container flex items-center justify-between h-20 w-full">
          <h1 id="logo">
            <Link href="#">
              <img src="/assets/logo.png" width={40} height={40} />
            </Link>
          </h1>
          <ul className="nav-menu flex items-center bg-primary">
            <li><Link className="nav-link mx-4 text-sm font-semibold" href="#projects">PROJETOS</Link></li>
            <li><Link className="nav-link mx-4 text-sm font-semibold" href="#">CONTATOS</Link></li>
            <li><Link className="nav-link mx-4 text-sm font-semibold" href="https://github.com/GustavoCHIQ/">GITHUB</Link></li>
            <li>
              <Link className="nav-link btn btn-primary mx-4 text-sm font-semibold" href="https://www.linkedin.com/in/gustavo-chiquitin-7b19871b7/">
                LINKEDIN <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </li>
            <div className="theme-switch">
              <input type="checkbox" id="switch" />
              <label className="toggle-icons" htmlFor="switch">
                <Image className="moon" src="/assets/moon.svg" alt="Moon" width={24} height={24} />
                <Image className="sun" src="/assets/sun.svg" alt="Sun" width={24} height={24} />
              </label>
            </div>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <section className="header-container flex flex-col items-center justify-center text-center">
        <Image
          className="profile-image w-36 h-36 rounded-full animate-bounce"
          src="/assets/image-profile.jpg"
          alt="Profile"
          width={150} height={150} />
        <h1 className="text-4xl font-bold mt-4">Olá, Eu Sou Gustavo Chiquitin</h1>
        <div className="content-text mt-4">
          <h2 className="text-2xl">Construindo sistemas robustos,</h2>
          <h2 className="text-2xl">APIs eficientes e infraestruturas escaláveis.</h2>
          <p className="mt-2">
            Um desenvolvedor back-end com experiência em arquitetura de software, banco de dados e integração de sistemas.
          </p>
        </div>
        <Link href="https://www.linkedin.com/in/gustavo-chiquitin-7b19871b7/" className="btn btn-secondary mt-4 px-6 py-2 rounded-lg" target="_blank">
          Entre em contato
        </Link>
      </section>
    </header>
  );
}