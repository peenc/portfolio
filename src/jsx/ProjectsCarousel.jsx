import React, { useRef, useEffect } from "react";

export default function ProjectsCarousel({ projects }) {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const scrollAmount = 300;
        if (!carouselRef.current) return;

        carouselRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const interval = setInterval(() => {
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            if (carousel.scrollLeft >= maxScrollLeft - 5) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projetos" className="projects-section">
            <h2>Projetos em Destaque</h2>
            <div className="carousel-wrapper">
                <button className="carousel-btn left" onClick={() => scrollCarousel('left')}>◀</button>

                <div className="carousel" ref={carouselRef}>
                    {projects.map((proj, index) => (
                        <div key={index} className="carousel-item">
                            <a href={`/projetos/${proj.title.toLowerCase().replace(/\s+/g, '')}`}>
                                <img src={proj.img} alt={`Projeto: ${proj.title}`} />
                            </a>
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <div className="buttons">
                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
                                {proj.online !== "#" && (
                                    <a href={proj.online} target="_blank" rel="noopener noreferrer" className="btn btn-online">Ver Online</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn right" onClick={() => scrollCarousel('right')}>▶</button>
            </div>
        </section>
    );
}
