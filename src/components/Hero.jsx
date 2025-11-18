import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* left */}
        <div className="space-y-6">
          <h1 className="text-4xl leading-tight font-bold md:text-5xl text-gray-900">
            Pure, Natural & Wholesome Flour
            <span className="block text-lime-700">
              Straight From Local Farms
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Made from 100% real farm produce. No preservatives. No additives.
            Clean, nutritious flour for every Nigerian home.
          </p>

          <div className="flex gap-4 mt-4">
            <Button className="bg-lime-700 hover:bg-lime-800 text-white px-6 py-3 rounded-md">
              Shop Now
            </Button>

            <Button
              variant="outline"
              className="px-6 py-3 rounded-md border-lime-700 text-lime-700 hover:bg-lime-50"
            >
              Become a Distributor
            </Button>
          </div>
        </div>

        {/* right  */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[80%] max-w-sm md:max-w-md">
            <img
              src="/images/hero.png"
              alt="Lynafrick Flour Packaging"
              className="w-full max-w-xs lg:max-w-md rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
