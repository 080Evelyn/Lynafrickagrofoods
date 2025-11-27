import { buttonVariants } from "@/components/ui/button";
import DistributorButton from "./ui/distributor-button";
import { cn } from "@/lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <motion.section
      id="home"
      className="w-full px-6 py-15 md:py-20 2xl:py-28 mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* left */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1
            className="text-4xl leading-tight font-bold md:text-5xl text-gray-900"
            variants={itemVariants}
          >
            Pure, Natural & Wholesome Flour
            <motion.span
              className="block text-lime-700"
              variants={itemVariants}
            >
              Straight From Local Farms
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base md:text-lg leading-relaxed"
            variants={itemVariants}
          >
            Made from 100% real farm produce. No preservatives. No additives.
            Clean, nutritious flour for every Nigerian home.
          </motion.p>

          <motion.div className="flex gap-4 mt-4" variants={itemVariants}>
            <a
              href="#products"
              target="_self"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-lime-700 hover:bg-lime-800 text-white"
              )}
            >
              Shop Now
            </a>
            <DistributorButton />
          </motion.div>
        </motion.div>

        {/* right  */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={imageVariants}
        >
          <div className="w-[80%] max-w-sm md:max-w-md">
            <motion.img
              src="/images/hero.webp"
              alt="Lynafrick Flour Packaging"
              className="w-full max-w-xs lg:max-w-md rounded-xl object-cover"
              variants={imageVariants}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
