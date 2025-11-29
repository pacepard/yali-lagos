"use client" 


import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlayCircle, ArrowRight } from '@phosphor-icons/react'; // Import Phosphor Icons

export default function InclusiveCareHero() {
  
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
      className="relative w-full h-[99vh] flex flex-col justify-between pt-24 pb-16 text-white overflow-hidden "
    >
      <div className="absolute inset-0 mt-18">
        <Image
          src="/blocks/hero-image.jpeg"
          alt="Children reaching out to camera"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-6 w-full">
        {/* Top content */}
        <div className="mt-16 md:mt-24">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight max-w-lg"
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
          className="w-full flex justify-between items-center border-t border-white/30 pt-4"
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