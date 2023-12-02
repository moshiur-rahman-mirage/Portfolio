import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/bg_dev.png";
import AnimatedText from "@/components/AnimatedText";
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
          </div>
        </div>
      </Layout>
    </main>
  );
}
