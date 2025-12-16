"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { UsersThree, HandsClapping } from '@phosphor-icons/react';

export default function CallToAction() {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-10 md:py-20">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full min-h-[45vh] sm:min-h-[60vh] flex items-center justify-center text-white overflow-hidden rounded-xl"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/blocks/Join-yali.jpeg"
            alt="Children with special needs"
            fill
            priority
            quality={90}
            className="object-cover brightness-[0.4]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-full sm:max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Join YALI Network Lagos today.
            <br />
            Be part of a movement for change.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              asChild
              className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg shadow-lg"
            >
              <Link href="#join-volunteer" className="flex items-center justify-center">
                <UsersThree size={20} weight="bold" className="mr-2" />
                Join as a volunteer
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg bg-white hover:bg-gray-100 text-gray-900 border-none rounded-lg shadow-lg"
            >
              <Link href="#donate" className="flex items-center justify-center">
                <HandsClapping size={20} weight="bold" className="mr-2" />
                Donate
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
