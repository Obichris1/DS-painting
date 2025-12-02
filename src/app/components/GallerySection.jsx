'use client'

import React, { useState } from "react";
import { FaPlay,FaTimes } from "react-icons/fa";
import Image from "next/image";

const Gallery = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  // const items = [
  //   { type: "image", src: "/Gallery/HeroImage1.jpeg", alt: "Event 1" },
  //   { type: "video", src: "/Gallery/Vid8.mp4", alt: "Event 2" },
  //   { type: "image", src: "/Gallery/HeroImage2.jpeg", alt: "Event 3" },
  //   { type: "image", src: "Gallery/Gallery1.webp", alt: "Event 4" },
  //   { type: "video", src: "/Gallery/Vid6.mp4", alt: "Event 5" },
  //   { type: "image", src: "/Gallery/Gallery5.jpeg", alt: "Event 6" },
  //   { type: "video", src: "/Gallery/Vid2.mp4", alt: "Event 7" },
  //   { type: "image", src: "/Gallery/Gallery6.jpg", alt: "Event 8" },
  //   { type: "video", src: "Gallery/Vid1.mp4", alt: "Event 9" },
  //   { type: "image", src: "Gallery/Gallery3.webp", alt: "Event 10" },
  //   { type: "video", src: "/Gallery/Vid4.mp4", alt: "Event 11" },
  //   { type: "image", src: "/Gallery/picture-4.jpg", alt: "Event 14" },
  //   { type: "video", src: "Gallery/Vid8.mp4", alt: "Event 12" },
  //   { type: "image", src: "/Gallery/Gallery9.jpg", alt: "Event 13" },
 
  //   { type: "video", src: "/Gallery/Advert.mp4", alt: "Event 15" }
  //   ,
  // ];

  const openModal = (media, isVideo) => {
    setCurrentMedia(media);
    setIsVideo(isVideo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentMedia(null);
    setIsVideo(false);
  };

  return (
    <div className="gallery grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
      {/* Gallery Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className="gallery-item cursor-pointer"
          onClick={() => openModal(item.src, item.type === "video")}
          style={{ animationDelay: `${index * 800}ms` }} // Staggered delay for each item
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              
            />
          ) : (
            <div className="relative w-full h-48">
            {/* Video Thumbnail */}
            <video
              src={item.src}
              className="w-full h-full object-cover rounded-md shadow-lg"
              muted
            />
            {/* Video Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-40 rounded-md">
              <FaPlay className="text-white text-2xl" />
            </div>
          </div>
          )}
        </div>
      ))}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className=" rounded-lg overflow-hidden relative p-4 max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-0 right-2 text-white fontBold text-xl"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            {/* Media Preview */}
            {isVideo ? (
              <video
                src={currentMedia}
                controls
                autoPlay
                muted
                playsInline 
                loop
                className="w-full max-w-full max-h-[80vh] rounded-xl p-1"
              />
            ) : (
              <Image
                src={currentMedia}
                alt="Preview"
                className="w-full h-auto rounded-xl p-1"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
