import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { products } from "@/constant";

export default function ProductsSection() {
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonHoverVariants = {
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="products"
      className="w-full px-6 py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={headerVariants}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-3 max-w-md mx-auto"
            variants={headerVariants}
          >
            Nutritious, natural and freshly milled flour made from real farm
            produce.
          </motion.p>
        </motion.div>

        {/* PRODUCT CARDS */}
        <div className="grid gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white border shadow-sm rounded-xl p-6 flex flex-col cursor-pointer"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="w-full flex justify-center mb-6"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img
                  src={product.img}
                  alt={product.alt}
                  className="w-48 h-48 object-contain rounded-lg"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-lime-700 font-medium mt-1">
                {product.subtitle}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {product.desc}
              </p>

              <motion.div
                className="mt-6"
                variants={buttonHoverVariants}
                whileHover="hover"
              >
                <Button
                  className="w-full bg-lime-700 hover:bg-lime-800 text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg"
                  onClick={() => {
                    const message = `Hello, I would like to order the ${product.title}.`;
                    const url = `https://api.whatsapp.com/send/?phone=2349059296155&text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(url, "_blank");
                  }}
                >
                  <ShoppingBag className="mr-2" />
                  Order now
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
