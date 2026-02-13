import React from "react";
import Header from "../Header.jsx";
import ProjectsCarousel from "../ProjectsCarousel.jsx";
import Contact from "../Contact.jsx";
import CTAFlutuante from "../CTAFlutuante.jsx";

const projects = [
    {
        title: "CapiWallet",
        description: "Sistema web de carteira digital",
        githubUrl: "https://github.com/ulennon/capiwallet",
        online: "#",
        img: "/images/capiwallet.png",
    },
    {
        title: "Fitcommerce",
        description: "Sistema de e-commerce genérico pronto para utilização.",
        githubUrl: "https://github.com/peenc/ecommerce",
        online: "#",
        img: "/images/fitcommerce.png",
    },
    {
        title: "Shurima",
        description: "Consulta de estatísticas e histórico.",
        githubUrl: "https://github.com/uLennon/shurima",
        online: "#",
        img: "/images/shurima.png",
    },
    {
        title: "Onde Tem Banheiro",
        description: "Mapa colaborativo.",
        githubUrl: "https://github.com/peenc/ondetembanheiro",
        online: "#",
        img: "/images/ondetembanheiro.png",
    },
];

export default function Home() {
    return (
        <>

            <Header />
            <ProjectsCarousel projects={projects} />
            <Contact />
            <CTAFlutuante />
        </>
    );
}
