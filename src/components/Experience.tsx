import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
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
        Formation & Expérience
      </motion.h2>

      {/* Formation */}
      <motion.div variants={fadeIn} className="mb-12">
        <div className="flex items-center mb-8">
          <GraduationCap className="text-orange-500 mr-3" size={28} />
          <h3 className="text-3xl font-semibold text-white">Formation</h3>
        </div>

        <div className="space-y-8">
          {/* Diplôme d'Ingénieur */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="text-sm text-orange-500 mb-2">2020 - 2023</div>
            <h4 className="text-2xl font-semibold text-white mb-2">
              Diplôme d'Ingénieur en Informatique
            </h4>
            <p className="text-gray-300">École d'ingénieurs</p>
          </motion.div>

          {/* DUT Informatique */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="text-sm text-orange-500 mb-2">2018 - 2020</div>
            <h4 className="text-2xl font-semibold text-white mb-2">
              DUT Informatique
            </h4>
            <p className="text-gray-300">IUT</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Expérience */}
      <motion.div variants={fadeIn}>
        <div className="flex items-center mb-8">
          <Briefcase className="text-orange-500 mr-3" size={28} />
          <h3 className="text-3xl font-semibold text-white">Expérience</h3>
        </div>

        <div className="space-y-8">
          {/* Développeur Full Stack */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="text-sm text-orange-500 mb-2">2023 - Présent</div>
            <h4 className="text-2xl font-semibold text-white mb-2">
              Développeur Full Stack
            </h4>
            <p className="text-gray-300 mb-4">Entreprise Tech</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Développement d'applications web</li>
              <li>Gestion de projets agiles</li>
              <li>Collaboration avec les équipes design</li>
            </ul>
          </motion.div>

          {/* Stage Développeur Frontend */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="text-sm text-orange-500 mb-2">2022 - 2023</div>
            <h4 className="text-2xl font-semibold text-white mb-2">
              Stage Développeur Frontend
            </h4>
            <p className="text-gray-300 mb-4">Startup Innovante</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Développement d'interfaces utilisateur</li>
              <li>Optimisation des performances</li>
              <li>Intégration d'APIs</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
