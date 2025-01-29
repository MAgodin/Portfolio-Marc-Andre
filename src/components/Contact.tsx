import React from "react";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/chemin/vers/votre-cv.pdf"; // Remplacez par le chemin réel de votre CV
    link.download = "Votre_Nom_CV.pdf"; // Nom du fichier à télécharger
    link.click();
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
        Contact
      </motion.h2>

      {/* Grille de contact */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulaire de contact */}
        <motion.div
          variants={fadeIn}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Envoyez-moi un message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
            >
              Envoyer
            </button>
          </form>
        </motion.div>

        {/* Informations de contact */}
        <motion.div
          variants={fadeIn}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Informations de contact
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-orange-500 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-gray-300">votre@email.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-orange-500 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-white">Téléphone</h4>
                <p className="text-gray-300">+33 6 XX XX XX XX</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-orange-500 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-white">Adresse</h4>
                <p className="text-gray-300">Votre Ville, France</p>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="mt-8">
            <h4 className="font-medium text-white mb-4">Horaires</h4>
            <div className="space-y-2 text-gray-300">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi - Dimanche: Fermé</p>
            </div>
          </div>

          {/* Bouton pour télécharger le CV */}
          <div className="mt-8">
            <button
              onClick={handleDownloadCV}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
            >
              <Download className="mr-2" size={20} />
              Télécharger mon CV
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
