import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "Application de gestion de tâches avec fonctionnalités collaboratives.",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Portfolio Personnel",
      description:
        "Site web portfolio responsive présentant mes projets et compétences.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {/* Titre principal */}
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Mes Projets
      </motion.h2>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover="hover"
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image du projet */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
            />

            {/* Contenu du projet */}
            <div className="p-6">
              {/* Titre du projet */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* Description du projet */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-gray-700 text-orange-500 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Liens GitHub et Demo */}
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  className="flex items-center text-gray-300 hover:text-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="mr-1" />
                  Code
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center text-gray-300 hover:text-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
