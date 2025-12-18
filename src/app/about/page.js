"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20 space-y-24">
      <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
      {/* NBD ATHLEISURE Section */}
      <section className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Who we are
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            My name is Chigozie (Dapo) Ogbuaya, and I’m the founder of Ds'
            Painting Services — a local, reliable painting company proudly
            serving the GTA. We specialize in clean, professional, and
            hassle-free interior painting, exterior painting, cabinet
            refinishing, furniture staining, and more as we continue to grow.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            At DS’ Painting Services, we specialize in high-quality,
            detail-oriented painting work. Our services include interior and
            exterior painting, trim, doors, and baseboards, small drywall
            repairs, cabinet painting and refinishing, and light carpentry and
            patching to ensure surfaces are properly prepared for a flawless
            finish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/ds22.png" // replace with actual image
            alt="NBD Athleisure"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* Joe Karter Shoes Section */}
      <section className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
        >
          <Image
            src="/ds21.png" // replace with actual image
            alt="Joe Karter Shoes"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="space-y-6 order-1 md:order-2"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-7">
            Our Values — What Makes Us Different
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            At DS’ Painting Services, we take pride in delivering high-quality
            painting solutions with a strong focus on care, professionalism, and
            attention to detail. We believe your home deserves respect, which is
            why we maintain a clean workspace, follow clear schedules, and
            communicate honestly from start to finish. Every project is
            completed using premium materials, proper preparation, and skilled
            workmanship to ensure smooth, lasting finishes. Our pricing is
            always fair and transparent — no hidden fees, no surprises.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            We proudly serve Toronto and surrounding areas, including
            Mississauga, Brampton, Vaughan, Markham, and Scarborough, and we
            look forward to showcasing more of our work as we continue to grow.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
