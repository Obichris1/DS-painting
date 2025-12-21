"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineX,
} from "react-icons/ai";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Contactpage() {
  return (
    <div>
      {/* Hero Section */}
       {/* <Typography variant="h4" className="text-center !font-bold">Contact Us</Typography> */}
       
       <motion.div
        className="relative h-[40vh] bg-cover bg-center text-white flex items-center  justify-center"
        style={{ backgroundImage: "url('/ds23.jpeg')" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-2xl md:text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
      </motion.div>
      
      {/* Main Content */}
      <motion.div
        className="py-16 w-[90%] m-auto  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className=" mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Left Content */}
          <motion.div
            className=" w-full md:w-[70%]   "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get in touch with us
            </h3>
            <p className="font-bold  md:text-lg mb-2">Want to make enquiries or issue a complaint?</p>
           
            <div className=" text-xs md:text-sm flex flex-col gap-4 mt-10">
          {/* <Typography className="font-bold uppercase text-black mb-4">
            Contact Info
          </Typography> */}

          <span className="flex items-center gap-4 ">
            <AiOutlineMail className="text-lg" />
            <Link
              href="mailto:dspaintingservices1@gmail.com?subject=Inquiry&body=Hello, I want to make enquiries..."
              className="hover:text-primary  font-bold !text-sm  md:!text-base"
            >
           dspaintingservices1@gmail.com
            </Link>
          </span>
          <span className="flex items-center gap-4 ">
            <AiOutlinePhone className="text-lg" />
            <Link href="" className="hover:text-primary font-bold !text-sm  md:!text-base">
            +1 (647) 571-9868
            </Link>
          
            {/* <Link href="" className="hover:text-primary font-bold text-sm md:!text-base">
            +1 (647) 571-9868
            </Link> */}
          </span>
        </div>

        {/* SOCIAL MEDIA  */}
        <div className="flex  md:self-end  items-center gap-4 mt-12">
          <Link
            href="https://www.instagram.com/dspainting.services_gta?igsh=MWxudHo2ODF3dnR5aA%3D%3D&utm_source=qr"
            target="_blank"
            className=" rounded-full text-[#E12F6C] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiOutlineInstagram />
          </Link>

          <Link
             href="https://web.facebook.com/people/Ds-Painting-Services/61579532498654/?sk=reels_tab"
            target="_blank"
            className="  rounded-full text-[#00008B] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiFillFacebook />
          </Link>

          {/* <Link
            href=""
            target="_blank"
            className=" rounded-full text-[#000] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiOutlineX />
          </Link> */}
        </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
