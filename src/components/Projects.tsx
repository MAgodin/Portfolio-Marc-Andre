import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Site Web pour Stéphane Godin",
      description:
        "Site web en développement pour Stéphane Godin, un professionnel dans le domaine de [spécialité]. Ce projet est réalisé avec HTML, CSS, et JavaScript et sera mis en ligne très bientôt.",
      image:
        "https://via.placeholder.com/800x400?text=St%C3%A9phane+Godin+Website", // Placeholder image, replace with actual image
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/MAgodin/Stephane-Godin",
      liveLink: "#", // Live link once the website is online
    },
    {
      title: "Cap'able",
      description:
        "Cap'able est une initiative visant à favoriser l'inclusion des personnes en situation de vulnérabilité, avec des solutions d'assistance virtuelle.",
      image:
        "https://via.placeholder.com/800x400?text=Cap%27able+Project", // Placeholder image, replace with actual image
    },
    {
      title: "Mon Portfolio",
      description:
        "Site web portfolio responsive présentant mes projets, compétences et ma passion pour le développement web. Il est conçu avec React, Tailwind CSS et TypeScript.",
      image:
        "https://via.placeholder.com/800x400?text=Mon+Portfolio", // Placeholder image, replace with actual image
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      githubLink: "#", // Add GitHub link for your portfolio code
      liveLink: "#", // Link to your live portfolio
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
              {project.technologies && (
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
              )}

              {/* Liens GitHub et Demo (Supprimé pour Cap'able) */}
              {project.githubLink && (
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
                </div>
              )}
              {project.liveLink && (
                <div className="flex space-x-4 mt-2">
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
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
