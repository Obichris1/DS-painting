"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Button } from "@mui/material";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const slides = [
  {
    image: "/ds5.png",
    title: "Trusted painting artisian in Toronto, Canada",
    subtitle:
      "Innovative real estate and logistics solutions designed to support sustainable growth and expansion.",
  },
  {
    image: "/ds10.png",
    title: "We bring door step services with just a call",
    subtitle:
      "From procurement to trade facilitation, FMCC connects clients to global opportunities through trust and collaboration.",
  },
  {
    image: "/ds12.jpeg",
    title: "Fueling energy with precision and expertise",
    subtitle:
      "Reliable oilfield services and technical support that power progress across industries.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-start">
      
      {/* Background Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </AnimatePresence>

        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-full md:w-2/3 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container px-8 md:px-20 text-white max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "_text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <Typography className="!text-2xl md:!text-4xl !font-bold !mb-4">
              {slides[current].title}
            </Typography>

            <Typography className="!text-sm md:!text-lg !mb-6">
              {slides[current].subtitle}
            </Typography>

            <Link href="/contact">
              <Button
                variant="contained"
                className="!text-white !text-xs md:!text-base !px-8 !py-3 !bg-[#000] font-bold hover:!shadow-2xl hover:!scale-105 flex items-center gap-2"
              >
                Get a Quote
                <MdArrowForward className="text-white text-xl" />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-[11rem] md:left-[24rem] lg:left-[44rem] flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
