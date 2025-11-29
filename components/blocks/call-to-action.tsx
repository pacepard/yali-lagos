"use client" 


import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { UsersThree, HandsClapping } from '@phosphor-icons/react'; // Import Phosphor Icons

export default function CallToAction() {
  return (

    <div className='p-20'>

          <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0">
        <Image
          src="/blocks/bg-about.png"
          alt="Children with special needs"
          width={1920}
          height={1080}
          objectFit="cover"
          quality={90}
          className="brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
        >
          You can contribute to provide a place for children with special needs!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild className="px-8 py-6 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg shadow-lg">
            <Link href="#join-volunteer">
              <UsersThree size={24} weight="bold" className="mr-2" />
              Join as a volunteer
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg bg-white hover:bg-gray-100 text-gray-900 border-none rounded-lg shadow-lg">
            <Link href="#donate">
              <HandsClapping size={24} weight="bold" className="mr-2" />
              Donate
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>

    </div>

  );
}