import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Code, ExternalLink, ChevronRight } from "lucide-react"
import "./projects-section.css"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "A portfolio made with React.js and Vite, showcasing my latest projects, skills, goals and contact information.",
      image: "src/assets/projects-screenshots/97shots_so.png",
      tags: ["React.js", "Vite", "JS", "CSS", "Framer Motion"],
      links: [
          { label: "View Site", icon: <ExternalLink className="icon-small" />, url: "https://sebastianpallero.netlify.app/" },
          { label: "View Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/portfolio" }
        ],
    },
    {
      id: 2,
      title: "Petshop e-commerce",
      description:
        "An e-commerce web site with a functional shopping-cart made with redux toolkit and firestore for the products and shopping orders.",
      image: "src/assets/projects-screenshots/342shots_so.png",
      tags: ["React.js", "Vite", "Firebase", "Redux Toolkit", "Payment Gateway"],
      links: [
        { label: "View Site", icon: <ExternalLink className="icon-small" />, url: "https://patitas-petshop-and-food.netlify.app/" },
        { label: "View Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/React-Vite-Patitas" },
      ],
    },
    {
      id: 3,
      title: "Inventory Management System",
      description:
        "A fullstack inventory management system made with SpringBoot and React.js, with JWT authentication, event listeners, useQuery, axios, MySql, and more.",
      image: "/src/assets/projects-screenshots/429shots_so.png",
      tags: ["React.js", "API Integration", "Tailwind CSS", "Spring Boot", "MySQL"],
      links: [
        { label: "View Frontend Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/inventory-management-front" },
        { label: "View Backend Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/inventory-management-API" },
      ],
    },
    {
      id: 3,
      title: "Clinic Booking System - In Progress",
      description:
        "A fullstack medical appointment booking system made with SpringBoot and Next.js, with JWT authentication, OAuth2, SpringMail, event listeners, useQuery, axios, MySql, and more.",
      image: "src/assets/projects-screenshots/695shots_so.png",
      tags: ["Next.js", "SpringBoot", "OAuth 2", "Spring Mail", "MySQL", "Swagger"],
      links: [
        { label: "View Frontend Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/multi-clinic-booking-system-front" },
        { label: "View Backend Code", icon: <Code className="icon-small" />, url: "https://github.com/Sebaspallero/multi-clinic-booking-system-API" },
      ],
    },
  ]

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Projects
            <span className="accent-dot">.</span>
          </h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`project-grid ${index % 2 === 0 ? "even-project" : "odd-project"}`}>
                <div className={`project-image-container ${index % 2 === 0 ? "order-even" : "order-odd"}`}>
                  <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="image-wrapper">
                    <div className="image-overlay-gradient"></div>

                    <div className="image-container">
                      <div className="image-hover-overlay"></div>

                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />

                      <div className="status-indicator">
                        <div className="status-dot"></div>
                      </div>

                      <div className="image-links-container">
                        <div className="links-wrapper">
                          {project.links.map((link, i) => (
                            <a key={i} target="_blank" href={link.url} className="image-link-button">
                              {link.icon}
                              <span>{link.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="decorative-box bottom-right"></div>
                    <div className="decorative-box top-left"></div>
                  </motion.div>
                </div>

                <div className={`project-content ${index % 2 === 0 ? "order-content-even" : "order-content-odd"}`}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="content-wrapper"
                  >
                    <h3 className="project-title">
                      <span className="project-number">{(index + 1).toString().padStart(2, "0")}</span>
                      {project.title}
                      {activeProject === index && (
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          <ArrowUpRight className="icon-small accent-icon" />
                        </motion.div>
                      )}
                    </h3>

                    <p className="project-description">{project.description}</p>

                    <div className="tags-container">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="links-container">
                      {project.links.map((link, i) => (
                        <a key={i} target="_blank" href={link.url} className="text-link">
                          <span>{link.label}</span>
                          <ChevronRight className="chevron-icon" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
