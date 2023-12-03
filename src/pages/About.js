import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useEffect, useRef } from "react";
import pp from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { motion, spring, useInView, useMotionValue, useSpring } from "framer-motion";



const AnimatedNumbers = ({value})=>{
const ref=useRef();

const motionValue=useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})
const isInView=useInView(ref)

useEffect(()=>{
 if(isInView){
  motionValue.set(value)
 }
},[isInView,motionValue,value])

useEffect(()=>{
  springValue.on("change",(latest)=>{
    if(ref.current && latest.toFixed(0) <=value){
      ref.current.textContent=latest.toFixed(0)
    }
  })
},[])


  return <span ref={ref}></span>
}




const About = () => {
  return (
    <>
      {/* <head>
        <title>Moshiur | About</title>
        <meta name="about" content="About Myself" />
      </head> */}
      <main className="w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="One step at a time"
            className="text-3xl font-bold"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-center">
              <h2 className="mb-16 text-lg font-bold uppercase text-dark ">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>

              <p className="font-medium my-4">
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium">
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light
            p-8
            "
            >
              <div className="absolute border-dark bg-dark top-0 -right-5 -z-10 w-[109%] h-[109%] rounded-2xl"></div>
              <Image src={pp} className="w-full h-auto rounded-2xl" />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={50}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied Client</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">40+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Project Completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">3+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">Years of experience</h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
