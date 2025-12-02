"use client";

import React from "react";
import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineEnvironment,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineX,
} from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#000] border border-black mt-10">
      {/* Contact Us */}
      <div className="flex flex-col gap-10 mb-4 w-[90%] m-auto py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="text-white text-sm flex flex-col gap-3 order-1 md:order-none w-full md:w-1/2 mb-4">
            {/* Logo */}
            <div className="relative w-[85px] h-[55px] sm:w-[100px] sm:h-[55px] mb-8">
              <Link href="/">
                <Image
                  src="/thumbnail - white.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            <span className="flex items-center text-sm md:text-base gap-4">
              <AiOutlineMail />
              <Link href="mailto:dspaintingservices1@gmail.com">
                dspaintingservices1@gmail.com
              </Link>
            </span>

            <span className="flex items-center text-sm md:text-base gap-4">
              <AiOutlinePhone />
              <Link
                href="tel:+1 (647) 571-9868
"
              >
                +1 (647) 571-9868
              </Link>
            </span>
          </div>

          {/* Subscribe Section */}
        </div>

        {/* Social Media */}
        <div className="flex gap-1 md:self-end">
          <Link
            href="https://www.instagram.com/dsquarevents/"
            target="_blank"
            className="p-3 rounded-full text-[#fff] transition-transform duration-300 hover:scale-150"
          >
            <AiOutlineInstagram />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100090758267591"
            target="_blank"
            className="p-3 rounded-full text-[#fff]  transition-transform duration-300 hover:scale-150"
          >
            <AiFillFacebook />
          </Link>

          <Link
            href="https://x.com/DEventcent23511"
            target="_blank"
            className="p-3 rounded-full text-[#fff] transition-transform duration-300 hover:scale-150"
          >
            <AiOutlineX />
          </Link>
        </div>
      </div>

      <hr className="border-white" />

      {/* Bottom Copyright */}
      <div className="py-4 px-4 m-auto text-white flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-sm text-center">
          Copyright &copy; 2025 FMCC. All rights reserved
        </p>

        <div className="flex items-center justify-center gap-1">
          <p className="text-sm text-center">Designed by</p>

          <Link
            href="https://www.oxrissolutions.com/"
            className="text-xs underline text-center"
            target="_blank"
          >
            Oxris Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
