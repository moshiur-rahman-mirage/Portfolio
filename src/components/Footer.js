import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved! </span>
        <div className="flex items-center ">
        Build With <span className="text-primary text-2xl px-1">&#9825;</span> By &nbsp; <Link href="">Moshiur</Link>
        </div>

        <Link href="">2</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
