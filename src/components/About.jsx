import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
  <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span> 
         </h1>
        <div className="flex flex-wrap">
        <motion.div 
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
            <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            initial= {{ opacity: 0, x: -100 }}
            transition={{duration: 0.5}}
            className="rounded-2xl" src={aboutImg} alt="about"/>
            </div>
        </motion.div>
                  <motion.div 
              whileInView={{ opacity: 1, x:0 }}
              initial={{ opacity: 0, x:100 }}
              transition={{duration:0.5}}
              className="w-full lg:w-1/2 flex flex-col items-start" 
          >
              <div className="flex flex-col items-start w-full">

                  <p className="my-2 max-w-xl py-6 mb-2 text-justify text-lg"> 
                      I am a final-year B.Tech student at IIT (ISM) Dhanbad. Since my first year, I've been deeply passionate about product management, working throughout all stages of both B2B and B2C product lifecycles.
                  </p>
                  <p className="my-2 max-w-xl py-6 mb-2 text-justify text-lg">
                      In my third year, I co-founded a VC consulting firm, where I helped over 15 early-stage startups secure pre-seed funding and connect with angel investors. I also got to lead product and analytics projects for MSMEs in Dubai, India, and France through my venture.
                  </p>

                  <p className="my-2 max-w-xl py-6 mb-5 text-justify text-lg"> 
                      I also led the Product Management Club of IIT Dhanbad as the Overall Coordinator, where I’ve led 20+ product-based projects for MSMEs and multinational brands like Marico Ltd. I’m proud of the 500+ strong product community I’ve built, mentored by 50+ industry experts and college alumni.
                  </p>
              </div>
          </motion.div>

  </div>
  </div>
  )
}
export default About
