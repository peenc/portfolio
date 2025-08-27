import React from "react";

export default function InfoSection({ id, title, children }) {
    return (
        <section id={id} className="info-section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}
