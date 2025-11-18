import { Sprout, Settings, PackageCheck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      title: "Pure Ingredient Sourcing",
      desc: "We select only high-grade, organically grown crops from trusted local farmers. No additives, no shortcuts.",
      icon: Sprout,
    },
    {
      title: "Gentle, Natural Processing",
      desc: "We gently process every ingredient to preserve its nutrients, aroma, and natural goodness without artificial enhancers.",
      icon: Settings,
    },
    {
      title: "Quality Assurance & Packaging",
      desc: "Before it gets to you, it's checked, tested, and carefully packaged to stay fresh and safe.",
      icon: PackageCheck,
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It's Made
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We believe transparency builds trust. Here's exactly how we bring
            our products to life.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center text-center group"
                >
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-gray-300 transition-colors duration-300">
                    <span className="font-semibold text-gray-700">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>

                  {/* Content */}
                  <div className="max-w-xs mx-auto">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
