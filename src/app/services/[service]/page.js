"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Gallery from "@/app/components/GallerySection";

export default function ServicePage() {
  const { service } = useParams();

  const ServiceData = {
    "interior-services": {
      title: "Interior Painting",
      image: "/ds5.png",
  
      content: `
  At Ds’ Painting, we are dedicated to fulfilling all your interior painting needs with professionalism and attention to detail. Our range of services covers major aspect of interior painting and related repairs to ensure your space looks its best.
  `,
  
      sections: [
        {
          heading: "Walls & Ceilings",
          items: [
            "Walls",
            "Ceilings",
            "Kitchen & Bathroom Painting",
            "Kitchen Cabinets",
            "Bathroom Vanities",
            "Cabinet Molding & Toe Kicks",
          ],
        },
  
        {
          heading: "Fixtures & Architectural Features",
          items: [
            "Fireplaces (Wood & Brick)",
            "Interior Brick Walls",
            "Concrete Interior Surfaces",
            "Built-ins (Bookcases, Entertainment Centers, Feature Walls)",
          ],
        },
  
        {
          heading: "Trims & Woodwork",
          items: [
            "Baseboards",
            "Crown Molding",
            "Door & Window Trim",
          ],
        },
  
        {
          heading: "Door Painting",
          items: [
            "Interior Doors",
            "Closet Doors",
            "French & Pocket Doors",
          ],
        },
  
        {
          heading: "Touch-ups & Repairs",
          items: [
            "Patching & Drywall Repair",
            "Re-caulking",
            "Stain Blocking / Smoke Damage Repainting",
            "Water-Damage Repainting",
          ],
        },
      ],
  
      gallery: [
        { type: "video", src: "/Full video.mp4" },
        { type: "image", src: "/ds10.png" },
        { type: "image", src: "/ds1.jpeg" },
        { type: "video", src: "/dsv1.mp4" },
        { type: "image", src: "/ds22.png" },
        { type: "image", src: "/ds21.png" },
      ],
    },
  
    "exterior-services": {
      title: "Exterior Painting",
      image: "/ds3.jpeg",
  
      content: `
  At Ds’ Painting, we offer a full range of exterior services designed to enhance the beauty, durability, and value of your property. We use high-quality materials and deliver spotless, professional craftsmanship from start to finish.
  `,
  
      sections: [
        {
          heading: "Exterior Walls & Surfaces",
          items: [
            "Wood & Vinyl Siding",
            "Aluminum",
            "Brick",
          ],
        },
  
        {
          heading: "Trim & Accent Areas",
          items: [
            "Fascia Boards",
            "Soffits",
            "Window & Door Trim",
            "Garage Trim",
            "Decorative Shutters",
            "Corner Boards",
          ],
        },
  
        {
          heading: "Doors & Entry Areas",
          items: [
            "Front & Garage Doors",
            "Screen / Storm Doors",
            "Porch Ceilings",
          ],
        },
  
        {
          heading: "Exterior Metals",
          items: [
            "Gutters & Downspouts",
            "Metal Handrails",
            "Light Poles",
            "Awnings",
          ],
        },
      ],
  
      gallery: [
        { type: "image", src: "/ds13.jpeg" },
        { type: "image", src: "/ds2.jpeg" },

        { type: "video", src: "/dsv2.mp4" },
        { type: "image", src: "/ds3.jpeg" },
       
      ],
    },
  
    "furniture-staining": {
      title: "Furniture Staining Services",
      image: "/ds6.jpeg",
  
      content: `
  We provide professional staining and refinishing services to help you achieve a unified, elegant look throughout your home. Whether your pieces are wood or vinyl, our staining work enhances beauty, texture, and durability.
  `,
  
      sections: [
        {
          heading: "Furniture We Stain",
          items: [
            "Side Tables",
            "Coffee Tables",
            "Dressers",
            "Nightstands",
            "Bookshelves",
            "Dining Chairs",
            "Small Desks",
            "Wooden Benches",
            "Fireplace Mantels",
            "And More",
          ],
        },
  
        {
          heading: "Additional Exterior Wood Services",
          items: [
            "Deck & Porch Staining",
            "Railing & Baluster Finishing",
            "Pergolas & Gazebos",
            "Fence Painting / Staining",
            "Metal Fence Painting",
            "Detached Structures: Sheds, Workshops, Carports, Playhouses",
          ],
        },
  
        {
          heading: "Surface Preparation",
          items: [
            "Pressure Washing",
            "Scraping Loose Paint",
            "Sanding",
            "Caulking Cracks & Seams",
            "Priming Bare Wood / Metal",
            "Minor Wood Repairs",
          ],
        },
      ],
  
      gallery: [
        { type: "image", src: "/ds17.jpeg" },
        { type: "image", src: "/ds8.jpeg" },
        { type: "image", src: "/ds16.jpeg" },
        { type: "image", src: "/ds19.jpeg" },
        { type: "image", src: "/ds18.jpeg" },
      ],
    },
  };
  
  const services = ServiceData[service];

  if (!services) return notFound();

  

  return (
    <div className=" pb-10">

      {/* Banner Section */}
      <motion.div
        className="relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${services.image})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          className="relative z-10 text-xl md:text-3xl font-bold text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {services.title}
        </motion.h1>
      </motion.div>

      {/* Content intro */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <motion.p
          className="text-sm md:text-base leading-7"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {services.content}
        </motion.p>
      </div>

      {/* Sections with flexible grid bullets */}
      <div className="max-w-5xl mx-auto mt-14 px-4 space-y-10">
        {services.sections?.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Heading */}
            <h3 className="text-base md:text-lg font-semibold mb-4">
              {section.heading}
            </h3>

            {/* Bullet Items (Horizontal Grid) */}
            <div
              className="
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                gap-3 md:gap-5
              "
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center  gap-2 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="text-primary pt-1 text-lg">•</span>
                  <p className="text-xs md:text-sm ">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      {services.gallery && services.gallery.length > 0 && (
        <div className="max-w-5xl mx-auto mt-14 px-4">
          <h3 className="text-xl font-semibold mb-4">Check out some of our works on {services?.title}</h3>
          <Gallery items={services.gallery} />
        </div>
      )}
    </div>
  );
}
