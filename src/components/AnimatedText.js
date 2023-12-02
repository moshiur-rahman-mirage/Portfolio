
 import { motion } from "framer-motion";

const quote = {
  initial: {
   
    opacity: 1,
   
  },
  animate: {
    opacity: 1,
   
    transition: {
      delay: 0.5,
      staggerChildren:0.08
     
    },
  },
};
const signelWord = {
  initial: {
    y:50,
    opacity: 0,
   
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
     duration:1
     
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span key={word + "-" + index} className="inline-block"
            variants={signelWord}
            // initial="initial"
            // animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
