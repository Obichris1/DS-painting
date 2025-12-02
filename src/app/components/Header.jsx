"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const services = [
    { label: "Interior Painting", slug: "interior-services" },
    { label: "Exterior Painting", slug: "exterior-services" },
    { label: "Furniture Staining", slug: "furniture-staining" },
    // { label: "General Contracting", slug: "general-contracting" },
  ];

  const activeLinkClass =
    "relative pb-1 text-[#333] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#333]";

  return (
    <>
      <header className="sticky top-0 z-50 py-6  bg-[#fff] text-[#333] shadow-md">
        <div className="w-[90%] m-auto flex justify-between items-center">
          {/* Logo & Hamburger */}
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              <FiMenu />
            </button>

            <div className="relative w-[85px] h-[55px] sm:w-[120px] sm:h-[55px]">
              <Link href="/">
                <Image
                  src="/thumbnail.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm lg:text-base font-bold relative">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? activeLinkClass
                  : "pb-1 relative hover:scale-105 transform ease-in-out duration-300"
              }
            >
              Home
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? activeLinkClass
                  : "pb-1 relative hover:scale-105 transform ease-in-out duration-300"
              }
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 pb-1 ${
                  isServicesActive ? activeLinkClass : ""
                }`}
              >
                Services
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  size={12}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-10 -translate-x-1/2 mt-7 w-[40vw] rounded-sm xl:w-[40vw] bg-[#fff] text-black shadow-xl z-50 py-8 px-4 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={`/services/${item.slug}`}
                        className=" !font-bold block text-center hover:scale-105 transform ease-in-out duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          

            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? activeLinkClass
                  : "pb-1 relative hover:scale-105 transform ease-in-out duration-300"
              }
            >
              Contact
            </Link>
            <button className="px-8">

            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-10 left-0 w-full min-h-screen bg-[#000] text-white z-40 px-6 py-8 sm:px-10 sm:py-12 space-y-6"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-end  mt-12 md:mt-2">
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>

            <nav className="flex flex-col gap-10 text-base sm:text-lg">
              <Link
                href="/"
                className="!text-sm py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                  }
                  className="flex gap-2 items-center w-full text-left text-sm py-3 border-b border-white/20 font-medium"
                >
                  Services
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-0 mt-8 mb-4 flex flex-col gap-4"
                    >
                      {services.map((item, index) => (
                        <Link
                          key={index}
                          href={`/services/${item.slug}`}
                          className="!text-xs"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="!text-sm py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

          

              <Link
                href="/contact"
                className="!text-sm py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
