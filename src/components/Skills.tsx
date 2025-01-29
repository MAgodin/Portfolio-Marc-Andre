import React from "react";
import { Code, Database, Palette, Settings } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
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
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {/* Titre principal */}
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Compétences
      </motion.h2>

      {/* Grille de compétences */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Frontend */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Palette className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Frontend</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["HTML", "CSS", "JavaScript", "TypeScript", "Angular"].map(
              (skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${skill
                      .toLowerCase()
                      .replace(/ /g, "")}.svg`}
                    alt={skill}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Code className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Backend</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["SQL", "PHP", "C#", ".NET"].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${skill
                    .toLowerCase()
                    .replace(/ /g, "")}.svg`}
                  alt={skill}
                  className="w-6 h-6"
                />
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Base de données */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Database className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">
              Base de données
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["phpMyAdmin"].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${skill
                    .toLowerCase()
                    .replace(/ /g, "")}.svg`}
                  alt={skill}
                  className="w-6 h-6"
                />
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outils */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Settings className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Outils</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Linux",
              "Windows",
              "GitHub",
              "Visual Studio",
              "Visual Studio Code",
              "VMware",
              "Windows Server",
              "MDT",
              "Synology NAS",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${skill
                    .toLowerCase()
                    .replace(/ /g, "")}.svg`}
                  alt={skill}
                  className="w-6 h-6"
                />
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
