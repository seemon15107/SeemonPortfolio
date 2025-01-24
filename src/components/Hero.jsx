import {motion} from "framer-motion"
import { HERO_CONTENT } from "../constants"
import seemon from "../assets/Seemon_photo.webp"
import { TypeAnimation } from "react-type-animation";

const textVariants ={
    hidden: {opacity:0, y:50},
    visible: {opacity:1, y:0, transition: { duration:0.8, ease:"easeOut" } }
}
const containerVariants={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.3,
        }
    }
}
const imageVariants ={
    hidden:{ clipPath: "inset(0 50% 0 50%"},
    visible:{
        clipPath: "inset(0 0% 0 0%",
        transition: { duration: 1.2, ease:"easeInOut"},
    }
} 
const Hero=()=>{
    return(
        <section>
             <div className=" relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white" id="Hero">
             <motion.div
                className="w-full md:w-1/2 p-8 flex justify-start-center md:justify-start"
                initial="hidden"
                animate="visible"
                variants={imageVariants}>
                  <img src={seemon} alt="seemon" width={320} height={150} 
                  className="rounded-3xl mt-4 md:mt-8 lg:mt-12 "/> 

                </motion.div>
                <motion.div 
                   className="w-full md:w-1/2 p-8 my-9 mb-0.5 mt-20"
                   initial="hidden"
                   animate="visible"
                   variants={containerVariants}>
                <motion.h1
                   className="text-2xl md:text-right-2xl  sm:text-3xl lg:text-6xl font-bold my-4 mt-17 text-[#FAF0E6]"
                   variants={textVariants}>
                    
            
                   {HERO_CONTENT.greeting}
                   <span className="primary-color inline text-lg font-medium">
                   </span><br/>
                   <TypeAnimation
                          sequence={
                            [
                                "नमस्ते ",
                                1000,
                                "ਸ,ਤ ਸ੍ਰੀ ਅਕਾਲ",
                                1000,
                                "வணக்கம்",
                                1000,
                                "নমস্কার",
                                1000,
                            ]
                          }
                          wrapper="span"
                          speed={30}
                          repeat={Infinity}
                        />
                       <motion.h2
                         className="text-2xl md:text-right-2xl lg:text-5xl"
                         variants={textVariants}>
                        {HERO_CONTENT.name}
                       

                       </motion.h2>
                 </motion.h1>
                
                <motion.p
                   className="text-xl md:text-right-1xl lg:text-2xl mb-1"
                   variants={textVariants}>
                   {HERO_CONTENT.introduction}
                </motion.p> 
                <motion.a  
                className="bg-pink-500 text-white-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
                href={HERO_CONTENT.resumeLink}
                download
                rel="noopener noreferrer"
                target="_blank"
                variants={textVariants}>
                    {HERO_CONTENT.resumeLinkText}
                </motion.a > 
                </motion.div>
                {/* <motion.div
                className="w-full md:w-1/2 p-8 flex justify-center md:justify-end"
                initial="hidden"
                animate="visible"
                variants={imageVariants}>
                  <img src={seemon} alt="seemon" width={300} height={100} 
                  className="rounded-3xl mt-4 md:mt-8 lg:mt-12 "/> 

                </motion.div> */}
             </div>
        </section>       
    )
}
export default Hero;