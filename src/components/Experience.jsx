import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="px-6 py-10" id="experience">
      <h2 className="text-white text-2xl md:text-6xl mb-4 justify-start-center md:justify-start font-bold underline">
        Training/Internship
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Container for both experiences */}
        <div className="flex flex-col md:flex-row md:space-x-6 ">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="flex flex-col md:flex-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between items-start">
                {/* Year range */}
                <div className="text-sm w-full md:w-1/3 p-2 ">
                  {experience.yearRange}
    
                </div>
                
                {/* Experience details */}
            <div className="w-full md:w-ful">
                <div className="backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                    <h2 className="text-xl mb-2">{experience.title}</h2>
                       <p className="mb-4 text-sm italic">{experience.location}, <span className="ml-1"></span>{experience.place}</p>
                         <ul className="list-disc list-inside space-y-2">
                            {experience.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                                ))}
                         </ul>
                </div>
            </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
