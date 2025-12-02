"use client";
import { Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./components/Hero";
import TestimonialSection from "./components/Testimonials";

const services = [
  
  {
    title: "Market Intelligence",
    description:
      "At Ds’ Painting, we are dedicated to fulfilling all your interior painting needs with professionalism and attention to detail. ",
    label: "Interior Services",
    slug: "interior-services",
    image: "/ds9.jpeg",
  },
  {
    title: "Digital Transformation",
    description:
      "At Ds’ Painting, we offer a comprehensive range of exterior services designed to enhance the beauty and durability of your property.",
    label: "Exterior Services",
    slug: "exterior-services",
    image: "/ds7.jpeg",
  },
 
  {
    title: "Brand Identity",
    description:
      "If you want to create a unified look throughout your home, Ds’ Painting is ready to help with expert furniture staining. ",
    label: "Furniture Staining",
    slug: "furniture-staining",
    image: "/ds8.jpeg",
  },

  // {
  //   title: "Business Strategy",
  //   description:
  //     "Reliable oilfield solutions focused on safety, efficiency, and innovation.",
  //   label: "Oil and Gas Services",
  //   slug: "oil-gas-services",
  //   image: "/oil5.jpeg",
  // },
];

export default function Home() {
  return (
    <div className="space-y-8 ">
      <Hero />

      <Divider className="" />
      <div className="w-[90%] m-auto space-y-10 py-10">
        <Typography className="!text-2xl text-center md:!text-3xl !font-bold !mb-2">
           Services we offer
        </Typography>
        <Typography className="!text-sm md:!text-base  !mb-24">

        </Typography>

        <div className="space-y-32 grid md:grid-cols-3 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-12 "
        
            >
              {/* Image */}
              <div className="md:w-2/3 w-full rounded-sm overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-2/3 w-full flex flex-col gap-4 ">
                <Typography className="!text-lg md:!text-xl !font-bold  ">
                  {service?.label}
                </Typography>
                <Typography className="!text-sm md:!text-sm !font-medium ">
                  {service?.description}
                </Typography>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-medium inline-flex items-center gap-2 text-[#000] hover:underline group"
                >
                   Explore Service
                  <FaArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <Divider className="mb-8" />

        <TestimonialSection />
      </div>
    </div>
  );
}
