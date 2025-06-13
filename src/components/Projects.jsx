import React from "react";

const projects = [
  {
    title: "Wikipedia Search App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/wikipediaSearchApp",
    description: "Search Wikipedia articles using a React app with public API.",
  },
  {
    title: "Tourism Website",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/tourismWebsite",
    description: "A static responsive tourism-themed website.",
  },
  {
    title: "Todos Application",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/todosApplication",
    description: "To-do list manager using JS with CRUD operations.",
  },
  {
    title: "Notes App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/notes-app",
    description: "Note-taking app with create/edit/delete functionality.",
  },
  {
    title: "Guessing Game App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/guessingGameApp",
    description: "Fun number guessing game made with JavaScript.",
  },
  {
    title: "Food Munch Website",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/foodMunchWebsite",
    description: "Responsive restaurant-themed UI website.",
  },
  {
    title: "Defuse Bomb App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/defuseBombApp",
    description: "Timer-based bomb defusal simulation app.",
  },
  {
    title: "Cat and Light App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/catAndLightApp",
    description: "Simple UI interaction app.",
  },
  {
    title: "Auth App",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/auth",
    description: "Full auth system with JWT, MongoDB, Node.",
  },
  {
    title: "Task Manager",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/TaskManager",
    description: "Task management app with auth and full CRUD.",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
