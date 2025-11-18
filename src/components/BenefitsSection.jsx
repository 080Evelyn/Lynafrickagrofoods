import { Card } from "@/components/ui/card";
import {
  Leaf,
  ShieldCheck,
  Factory,
  HeartPulse,
  Package,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "100% Natural Ingredients",
    icon: Leaf,
    description:
      "Made purely from real farm produce with no additives or preservatives.",
  },
  {
    title: "No Preservatives",
    icon: ShieldCheck,
    description:
      "Zero chemicals. Every batch is processed clean and safe for your family.",
  },
  {
    title: "Locally Produced",
    icon: Factory,
    description:
      "Sourced from local farmers and processed within regulated facilities.",
  },
  {
    title: "Hygienic Processing",
    icon: Package,
    description:
      "Handled with high hygiene standards from milling to packaging.",
  },
  {
    title: "High Nutrient Content",
    icon: HeartPulse,
    description:
      "Rich in vitamins, fiber and energy—perfect for healthy living.",
  },
  {
    title: "Suitable for All Ages",
    icon: Users,
    description:
      "Great for kids, adults, the elderly and people with dietary requirements.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose Lynafrick Flour?
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-green-100 text-green-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
