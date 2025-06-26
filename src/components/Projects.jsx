import React from "react";

const projects = [
  {
    title:
      "Turf-Booking-Website - MERN Stack | JWT | Role-Based Access Control | MongoDB | CRUD | Responsive UI",
    link: "https://github.com/Anusha40836/turf-backend",
    live: "https://turf-frontend-nine.vercel.app/",
    description:
      "Developed a full-stack Turf Booking Web Application with user authentication and secure JWT-based route protection.Designed and integrated a responsive UI with dark mode and light mode options for enhanced user experience.Added search functionality to quickly check available turfs by location and time.Enabled users to submit reviews and ratings for turfs to improve feedback and service quality.Developed admin dashboard to add new turf locations, set pricing.",
  },

  {
    title:
      "DevConnect - MERN Stack | JWT Auth |Tag-Based Filtering | MongoDB | Bootstrap",
    link: "https://github.com/Anusha40836/devconnect-frontend",
    live: "https://devconnect-frontend.vercel.app",
    description:
      "Built a full-stack user authentication and project CRUD.Implemented tag-based filtering, project deadlines, and status tracking using MongoDB and React.Designed responsive UI with Bootstrap and secured routes using JWT tokens.",
  },
  {
    title: "Blog Application - MERN Stack | JWT Auth | MongoDB | Responsive UI",
    link: "https://github.com/Anusha40836/blog-backend",
    live: "https://blog-frontend-omega-eight.vercel.app",
    description:
      "Developed a full-stack blogging platform with secure authentication and post CRUD functionality.Integrated protected routes, user-specific access, and token-based session handling using JWT.Implemented React Router, form validation, and rich text editor (optional) for better UX.",
  },
  {
    title: "Wikipedia Search App | Java Script | HTML | CSS | Responsive UI",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/wikipediaSearchApp",
    description:
      "The Wikipedia Search App was built using vanilla JavaScript, HTML, and CSS.It listens for Enter, sends a GET request to the API with the search term, and logs the results to the console.",
  },
  {
    title: "Defuse Bomb App - JavaScript | setInterval | Event Handling",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/defuseBombApp",
    description:
      "Created a timer-based game using vanilla JavaScript where users must type 'DEFUSE' before the countdown reaches zero.Used setInterval() to update the countdown every second and clearInterval() to stop the timer when successfully defused or on failure.Handled user input with keydown event listener and dynamically updated the DOM to display win/loss outcomes in real time.",
  },

  {
    title: "To-Do List App - JavaScript | LocalStorage | DOM Manipulation",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/todosApplication",
    description:
      "Built a fully functional to-do list app using vanilla JavaScript with features like add, delete, and checkbox toggling.Used LocalStorage to persist tasks across browser sessions. Dynamically created and updated the DOM to manage task elements, including checkbox status, unique IDs, and delete icons.",
  },
  {
    title: "Notes App - Node.js | Express | MongoDB | JWT Auth | React",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/notes-app",
    description:
      "Built a full-stack note-taking app with user authentication and complete CRUD functionality.Developed a secure backend using Node.js and Express, with protected routes and JWT-based user validation to manage user-specific notes.Designed a responsive frontend with React that supports login, signup, and dynamic note creation/editing/deletion using Axios and Bootstrap.Integrated MongoDB for storing notes with user-specific filtering and used localStorage for token management on the client side.",
  },

  {
    title: "Auth App - MERN Stack | JWT | MongoDB | Express",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/auth",
    description:
      "Developed a secure authentication system using React for the frontend and Node.js + Express + MongoDB for the backend.Implemented JWT-based login and signup, including token generation, protected routes, and user session handling with localStorage.Built REST APIs for register, login, and user profile retrieval, with password hashing via bcrypt and validation logic for secure form submissions.",
  },

  {
    title: "Guessing Game App - JavaScript | DOM | Random Logic",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/guessingGameApp",
    description:
      "Created a simple interactive number guessing game using vanilla JavaScript, where users guess a random number between 1 and 100.Used Math.random() and Math.ceil() to generate the secret number and dynamically updated the DOM to show feedback based on the guess.Implemented input validation, conditional logic, and UI feedback with background color changes for success or error messages.",
  },
  {
    title: "Task Manager App - Node.js | Express | REST API | MySQL | React",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/TaskManager",
    description:
      "Task management app with   full CRUD.Built a Node.js + Express backend with RESTful APIs and integrated MYSQL for task storage.Designed a responsive frontend using React and Bootstrap, featuring controlled forms, dynamic task lists, and Axios-based API calls.Implemented state management with useState and useEffect to reflect task changes in real-time.",
  },

  {
    title:
      "Cat & Bulb Switch App - JavaScript | DOM Manipulation | Event Handling",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/catAndLightApp",
    description:
      "Built a fun and interactive app using vanilla JavaScript that simulates turning a bulb on/off and changing a cat's eye visibility based on switch status.Dynamically updated images (src attributes), button styles, and status text using getElementById() and event-driven functions.Used simple conditional UI logic to visually reflect the switch state with different images and color-coded buttons.",
  },
  {
    title: "Food Munch Website",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/foodMunchWebsite",
    description: "A Responsive restaurant-themed UI website.",
  },
  {
    title: "Tourism Website | HTML | CSS | Bootstrap | Responsive UI",
    link: "https://github.com/Anusha40836/entri-fsd/tree/main/tourismWebsite",
    description: "A static responsive tourism-themed website.",
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
            {project.live && (
              <>
                {" | "}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
