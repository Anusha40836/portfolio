import React from "react";

export default function Hero() {
  return (
    <section className="hero" data-aos="fade-right" id="home">
      <h2>Hello, I'm Anusha 👋</h2>
      <p>A passionate MERN Stack Developer who builds full-stack web apps 🚀</p>
      <a
        href="/portfolio/Anusha-A-Resume.pdf"
        download="Anusha_Resume.pdf"
        className="btn btn-primary"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
