import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/dev_pic.png"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0 ">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="devpic"  className="w-full h-1/2"  />
          </div>
        </div>
      </Layout>
    </main>
  );
}
