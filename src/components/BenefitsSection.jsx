import { Card } from "@/components/ui/card";
import { benefits } from "@/constant";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BenefitsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose Lynafrick Flour?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-green-100 text-green-700">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
