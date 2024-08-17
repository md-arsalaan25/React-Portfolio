import profilePic from "../assets/HeroImageFinal.png";
import { motion } from "framer-motion";

const container= (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
})

const Hero = () => {
return (
<div className="border-b border-neutral-900 pb-4 lg:mb-35"> 
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2"> 
            <div className="flex flex-col items-center lg:items-start"> 
                <motion.h1 
                    variants={container(0)}
                    initial = "hidden"
                    animate= "visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Md Arsalaan
                </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial = "hidden"
            animate= "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            Product Management
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial = "hidden"
            animate= "visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
            I'm a final-year B.Tech student at IIT Dhanbad with expertise in sprint management, product design, and analytics. I founded a VC consulting firm called Black Diamond Consulting in my third year , led global projects at Scholaride as a Director, and built a 600+ student-alumni community as the Product Management Club's Overall Coordinator. In my free time, I enjoy playing the guitar and writing ghazals and nazms.
            </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{x:100, opacity: 0}}
                animate= {{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                src={profilePic} alt="Arsalaan Mohammed"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero
