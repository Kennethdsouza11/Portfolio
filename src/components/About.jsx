import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-white pb-10">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div 
          whileInView={{opacity: 1, x:0}} 
          initial={{opacity: 0, x:-100}} 
          transition={{duration: 1}} 
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img width={350} height={350} src={about} alt="about" className="max-w-full h-auto" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}} 
          initial={{opacity:0, x:100}} 
          transition={{duration:1}} 
          className="w-full lg:w-1/2 flex items-center"
        >
          <div className="flex justify-center lg:justify-start w-full">
            <p className="my-2 max-w-xl py-6 lg:py-0">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;