 "use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react'; // Using Phosphor Icons

// Assuming you have a standard Button component in your project
import { Button } from '@/components/ui/button'; 

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15, // Stagger animation for the cards
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// --- Component for the individual Project Card ---
interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, imageSrc, altText }) => {
  return (
    <motion.div
      className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      variants={itemVariants}
    >
      {/* Background Image with Dark Overlay */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/65"></div>

      {/* Card Content */}
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <h3 className="text-sm font-light uppercase tracking-widest text-white/80">{subtitle}</h3>
        <h2 className="mb-2 text-2xl font-bold leading-tight">{title}</h2>
        <p className="mb-6 line-clamp-3 text-sm text-white/90">{description}</p>

        {/* Learn More Button */}
        <Button
          asChild
          variant="secondary"
          className="w-fit bg-accent text-gray-900 hover:bg-gray-100"
        >
          <Link href="#link-to-project">
            Learn more
            <CaretRight size={16} className="ml-1" /> {/* Phosphor Icon */}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

// --- Main Projects Component ---
export default function ProjectsSection() {
  const projects = [
    {
      title: 'Mission smile 1k:',
      subtitle: 'Outdoor charity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imageSrc: '/blocks/hero-image.png', // Ploceholder for the middle image
      altText: 'Smiling children in an outdoor charity event.',
    },
    {
      title: 'Weekly excursions',
      subtitle: 'Educational activities',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.',
      imageSrc: '/blocks/hero-image.png', // Ploceholder for the middle image
      altText: 'Group of people on an excursion.',
    },
    {
      title: 'Monthly public awareness',
      subtitle: 'Community outreach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      imageSrc: '/blocks/hero-image.png', // Ploceholder for the middle image
      altText: 'A group attending a public awareness meeting.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Area */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-0.5 w-12 bg-primary mb-3"></div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            PROJECTS WE HAVE DONE
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
            We are creating a place where children with special needs can thrive
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              imageSrc={project.imageSrc}
              altText={project.altText}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}