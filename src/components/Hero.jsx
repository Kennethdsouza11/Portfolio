import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kenneth_pic.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-white pb-32 lg:mb-35 min-h-[70vh] flex items-center">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-8 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Kenneth Dsouza
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl tracking-tight text-transparent"
            >
              Machine Learning Intern
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tight text-sm sm:text-base md:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="w-48 sm:w-60 md:w-72 lg:w-96 xl:w-108"
            src={profilePic}
            alt="Kenneth"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
