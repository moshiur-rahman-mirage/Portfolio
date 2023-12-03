import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/bg_dev.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Hireme from "@/components/Hireme";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  items-center text-dark w-full">
      <Layout className="pt-0 ">
        <div className="flex  items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="devpic" className="w-full h-full" />
          </div>
          <div className=" flex flex-col gap-5 w-1/2">
            <AnimatedText 
            text="Discover the World of Moshiur Rahman - Software Developer" 
            className="text-3xl font-bold "
            />
            <p>
            Hi, I'm Moshiur Rahman, a software developer. Dive into my portfolio to explore a collection of my coding 
            adventures. From web development to database engineering, I bring ideas to life with precision and passion. 
            Let's connect and build something amazing together!
            </p>
            <div className="flex items-center self-start mt-2">
              <Link href="linktopdf.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 rounded-lg hover:text-dark
              hover:bg-light text-lg border-2 border-solid border-transparent hover:border-dark px-6"
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"}/> </Link>
              <Link href="mailto:abc@gmail.com" className="flex items-center ml-4 p-2.5 rounded-lg
              hover:bg-light border-2 text-lg underline border-solid border-transparent px-6">Mail</Link>
            </div>
          </div>
        </div>
      </Layout>
      <Hireme/>
    </main>
  );
}
