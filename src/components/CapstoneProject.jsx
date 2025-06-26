import React from "react";
import "./CapstoneProject.css";
export default function CapstoneProject() {
  return (
    <section className="capstone-section" id="capstone">
      <h2 className="capstone-title">Capstone Project</h2>
      <div className="capstone-card">
        <h3 className="project-name">Turf Booking Website</h3>
        <p className="project-description">
          A full-stack Turf Booking Web Application with user authentication and
          secure JWT-based route protection. Built role-based access for Admin,
          and User to manage turfs, bookings efficiently. Designed and
          integrated a responsive UI with dark mode and light mode options for
          enhanced user experience. Developed admin dashboard to perform CRUD
          operations on new turf locations, set pricing,etc.Added search
          functionality to quickly check available turfs by location and turf
          name. Enabled users to submit reviews and ratings for turfs to improve
          feedback and service quality.
        </p>
        <a
          href="https://turf-frontend-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          🔗 View Project
        </a>
      </div>
    </section>
  );
}
