import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import { MdColorLens } from "react-icons/md";
const Footer = () => {
  const [color, setColor] = useState("bg-gradient-to-r from-[#4a5970] to bg-[#4e6476] dark:bg-gradient-to-r dark:from-[#191f2e] to dark:bg-[#121821] text-black pb-6 rounded-t-lg");

    return (
      <footer className="mt-10">
      <div className={`${color}`}>
        <div className="container mx-auto">
          <div className="flex justify-between py-4 px-12">
            <div className="flex  justify-center items-center gap-4">
            <button
            className="text-3xl"
          onClick={() => {
            const colors = [
              "bg-gradient-to-r from-[#5a2e46] to bg-[#4a2e5e] dark:bg-gradient-to-r dark:from-[#1b1b33] to dark:bg-[#14142a] text-black pb-6 rounded-t-lg",
              "bg-gradient-to-r from-[#325168] to bg-[#297b83] dark:bg-gradient-to-r dark:from-[#0d0d0d] to dark:bg-[#010101] text-black pb-6 rounded-t-lg",
              "bg-gradient-to-r from-[#634839] to bg-[#795240] dark:bg-gradient-to-r dark:from-[#2d231b] to dark:bg-[#1f1913] text-black pb-6 rounded-t-lg",
              "bg-gradient-to-r from-[#4a4939] to bg-[#605439] dark:bg-gradient-to-r dark:from-[#1f1f19] to dark:bg-[#27261f] text-black pb-6 rounded-t-lg",
              "bg-gradient-to-r from-[#325168] to bg-[#297b83] dark:bg-gradient-to-r dark:from-[#0d0d0d] to dark:bg-[#010101] text-black pb-6 rounded-t-lg",
            ];
            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <MdColorLens className="text-white" />
        </button>
              <h2 className="text-white text-2xl font-bold">TechTrove</h2>
            </div>
            
          </div>
          <hr />
          <div className="text-white pt-7 px-12 justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-6 ">
            <div>
              <h3 className="text-xl font-semibold pb-7">Follow Us On</h3>
              <div className="flex gap-2">
                <Link to="https://www.facebook.com"><FaFacebook className="text-xl" /></Link>
                <Link to="https://twitter.com/home"><FaTwitter className="text-xl" /></Link>
                <Link to="https://www.linkedin.com/feed/"><FaLinkedin className="text-xl" /></Link>
                <Link to="https://www.instagram.com/"><FaInstagram className="text-xl" /></Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl pb-1">Services</h3>
              <Link to="#">Electronic sells</Link>
              <Link to="#">Phone</Link>
              <Link to="#">Laptop</Link>
              <Link to="#">Desktop</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl pb-1">Blogs</h3>
              <Link to="#">Email Marketing</Link>
              <Link to="#">Campaigns</Link>
              <Link to="#">Branding</Link>
              <Link to="#">Offline</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl pb-1">Brands</h3>
              <Link to="#">Asus</Link>
              <Link to="#">Samsung</Link>
              <Link to="#">Apple</Link>
              <Link to="#">Sony</Link>
            </div>
          </div>
          <footer className="footer footer-center px-4 mt-10 text-white">
            <aside>
              <p>
                Copyright © 2024 - All right reserved by TechTrove
              </p>
            </aside>
          </footer>
        </div>
      </div>
    </footer>
    );
};

export default Footer;