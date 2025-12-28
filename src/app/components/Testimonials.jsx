"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Miss Tope",
    title: "CEO, Dsquare Event Centers",
    feedback:
      "I needed my apartment painted while I was in the process of moving out, and he did an excellent job. The work was professional, completed efficiently, and showed great attention to detail. Communication was clear throughout, and the apartment was left in great condition. I would highly recommend his services to anyone in need of quality painting work",
    rating: 5,
  },
  {
    name: "Dolly",
    title: "Director of Education, Baptist Model group of Schools",
    feedback:
      "I recently hired Ds’ Painting Services to repaint my two-bedroom apartment, and I couldn’t be happier with the results. From the start, they provided an honest and transparent quotation, making it easy to understand exactly what I was paying for. The team arrived right on schedule and completed the job in a timely manner, which I really appreciated. Their preparation work was outstanding—they took great care to protect my floors and furniture, and the attention to detail was evident in the final finish. Throughout the entire process, they conducted themselves with the utmost professionalism. I highly recommend this company to anyone looking for reliable, high-quality painting services.",
    rating: 5,
  },
  {
    name: "Melvin",
    title: "MD/CEO Becfom Hotels",
    feedback:
      "I needed my apartment painted  and was on the hunt for a painter on Facebook marketplace but wasn’t striking any good matches, so my good friend recommended Dapo, while I was in the process of moving in to my newly acquired space and he did an excellent job. His work swift and solid, the places I forgot to mention he executed flawlessly, great attention to detail. I would highly recommend his services and expertise to anyone in need of quality paint works.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className=" w-[90%] m-auto mt-12 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black ">
          What our satisfied clients are saying
        </h2>
        <p className="text-gray-500 text-sm md:text-lg mt-2">
          Trusted by businesses and individuals in Toronto,Canada
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="shadow-lg transform transition duration-300 hover:scale-105 max-h-screen"
              sx={{ background: "white", borderRadius: "16px" }}
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                <FaQuoteLeft size={60} className="text-primary" />
                <h3 className=" text-lg text-black mt-4">{testimonial.name}</h3>
                {/* <p className="text-sm text-gray-400 font-semibold">
                  {testimonial.title}
                </p> */}
                {/* <div className="flex mt-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar key={i} size={18} className="text-primary" />
                  ))}
                </div> */}
                <p className="text-gray-700 mt-4 italic text-xs md:text-sm !leading-7">
                  {testimonial.feedback}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
