"use client" 


import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlayCircle, ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'; // Import Phosphor Icons

export default function InclusiveCareHero() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of hero images - you can add more images here
  const heroImages = [
    {
      src: "/blocks/hero-image.jpeg",
      alt: "Children reaching out to camera"
    },
    {
      src: "/blocks/hero-image.png", 
      alt: "Youth empowerment program"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full h-[70vh] md:h-[99vh] flex flex-col justify-between pt-20I pb-16 text-white overflow-hidden "
    >
      <div className="absolute inset-0 mt-18 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              layout="fill"
              objectFit="cover"
              quality={90}
              className="brightness-[0.4]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous image"
      >
        <CaretLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next image"
      >
        <CaretRight size={24} />
      </button> */}

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto px-6 w-full">
        {/* Top content */}
        <div className="flex-1 mt-40 md:mt-24">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl "
          >
            Inspiring Young Leaders. Driving Change. Building the Future.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-8"
          >
            <Button asChild className="px-6 py-3 bg-primary hover:bg-gray-100 text-white rounded-md shadow">
              <Link href="#what-we-do">
                What we do
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-3 bg-accent text-black hover:bg-white/20 rounded-md">
              <Link href="#play-video" className="flex items-center gap-2">
                <PlayCircle size={24} weight="fill" />
                Play Video
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom content */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-between items-center border-t border-white/30 pt-4 pb-4 md:pb-0"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg"
          >
            2300+ registered members
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg"
          >
            58 Programs implemented
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}