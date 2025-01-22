import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white w-full sticky bottom-0 z-10">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-6 sm:px-8">
        <p className="hidden sm:block py-2 px-1 text-xs text-gray-500">
          &copy; {currentYear} agoesm. All rights reserved.
        </p>

        <div className="flex justify-center space-x-3">
          <Link
            href="https://www.linkedin.com/in/muhammadagusmiftah"
            target="_blank"
          >
            <SiLinkedin />
          </Link>
          <Link href="https://www.instagram.com/agoes.miftah" target="_blank">
            <SiInstagram />
          </Link>
          <Link href="https://github.com/agoesm" target="_blank">
            <SiGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
