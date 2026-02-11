import Navbar from "../Navbar.jsx";
import Header from "../Header.jsx";
import InfoSection from "../InfoSection.jsx";
import ProjectsCarousel from "../ProjectsCarousel.jsx";
import Experience from "../Experience.jsx";
import CurrentLearning from "../CurrentLearning.jsx";
import OtherProjects from "../OtherProjects.jsx";
import Contact from "../Contact.jsx";
import Footer from "../Footer.jsx";
import React from "react";
import {projects} from "../../data/projects.js";

export default function Projetos() {
    return (
        <div className="max-w-6xl mx-auto">
            <ProjectsCarousel projects={projects} />
            <OtherProjects/>
        </div>
    );
}