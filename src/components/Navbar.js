"use client"
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import {motion} from "framer-motion"




const CustomLink = ({ href, title, className = "" }) => {
    const router=useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
       bg-dark absolute left-0 -bottom-0.5 ${router.asPath===href ? 'w-full':'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
   
  return (
    <header className="px-32 border w-full flex items-center justify-between py-8 font-medium">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/About" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://github.com" target={"_blank"}
        whileHover={{y:-3}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
         <GithubIcon/>
        </motion.a>
        <motion.a href="https://linkedin.com" target={"_blank"}
          whileHover={{y:-3}}
          whileTap={{scale:0.9}}
          className="w-6 mx-3"
        >
         <LinkedInIcon/>
        </motion.a>
        <motion.a href="https://linkedin.com" target={"_blank"}
          whileHover={{y:-3}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3"
        >
         <TwitterIcon/>
        </motion.a>
      </nav>
    </header>
  );
};
export default Navbar;
