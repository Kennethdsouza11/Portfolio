import { RiReactjsLine } from "react-icons/ri";
import {FaPython} from "react-icons/fa";
import { FaHtml5 } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { DiCss3 } from "react-icons/di";
import { SiC } from "react-icons/si";
import { motion } from "framer-motion";
 
const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className = "border-b border-white pb-32">
            <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.2}}className = "my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.2}} className = "flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate"  className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <RiReactjsLine className = "text-7xl text-cyan-400"></RiReactjsLine>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <FaPython className = "text-7xl text-yellow-300"></FaPython>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <DiCss3 className = "text-7xl text-blue-400"></DiCss3>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <FaHtml5 className = "text-7xl text-red-500"></FaHtml5>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <FaJsSquare className = "text-7xl text-yellow-400"></FaJsSquare>
                </motion.div>
                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <SiC className = "text-7xl text-blue-400"></SiC>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className = "rounded-2xl border-4 border-neutral-700 p-4">
                    <DiMysql className = "text-7xl text-blue-400"></DiMysql>
                </motion.div>
                
                
            </motion.div>
        </div>
    )
}

export default Technologies