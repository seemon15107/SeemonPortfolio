import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-6" id="project">
      <h1 className="text-white text-2xl md:text-6xl mb-4 justify-start-center md:justify-start font-bold underline">
        Projects
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-lg overflow-hidden h-[350px] transition-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
              <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
              <p className="mb-4 text-center">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-stone-900 rounded-full py-2 px-4 hover:bg-gray-200 transition text-center"
              >
                View on Github
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
