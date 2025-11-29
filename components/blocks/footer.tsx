import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EnvelopeSimple } from '@phosphor-icons/react'; // Example Phosphor Icon

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <motion.li variants={itemVariants}>
    <Link href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </motion.li>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
      <motion.div
        className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Link href="/" className="text-3xl font-bold text-white">
            largerthan<i className="text-gray-400">i</i>
          </Link>
        </motion.div>

        {/* Navigation Links - Home */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6">Home</h4>
          <ul className="space-y-4">
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
            <FooterLink href="/what-we-do">What we do</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </motion.div>

        {/* Navigation Links - More */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6">More</h4>
          <ul className="space-y-4">
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/donate">Donate</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </ul>
        </motion.div>

        {/* Navigation Links - Connect */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6">Connect</h4>
          <ul className="space-y-4">
            <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
            <FooterLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
            <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
            <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          </ul>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div variants={itemVariants} className="lg:col-span-2 md:col-span-2">
          <h4 className="text-2xl font-bold mb-6">Subscribe to get latest updates</h4>
          <form className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Your email"
                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"
                aria-label="Your email address"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.div>
    </footer>
  );
}