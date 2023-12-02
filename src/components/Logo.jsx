import Link from "next/link";
import {motion} from 'framer-motion'

const Logo=()=> {
    const MotionLink = motion(Link);
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex text-2xl w-16 h-16 bg-dark text-light rounded-full justify-center items-center"
        whileHover={{scale:1.5,
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:2,repeat:Infinity}
        }}
      >
        MR
        
      </MotionLink>
    </motion.div>
  );
}
export default Logo;