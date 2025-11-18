import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const products = [
    {
      img: "/images/rice-cassava.png",
      alt: "Lynafrick Flour Classic",
      title: "Lynafrick Flour Classic",
      subtitle: "Rice + Cassava",
      desc: "A smooth and versatile blend perfect for swallow, baking, and everyday meals. Mild taste, easy to digest, suitable for all ages.",
    },
    {
      img: "/images/millet-plantain.png",
      alt: "Lynafrick Flour Balance",
      title: "Lynafrick Flour Balance",
      subtitle: "Millet + Plantain",
      desc: "A nutrient-rich flour blend designed for healthy living. High in fibre and energy, great for swallow, porridge, and wholesome meals.",
    },
  ];

  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Nutritious, natural and freshly milled flour made from real farm
            produce.
          </p>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border shadow-sm rounded-xl p-6 flex flex-col"
            >
              <div className="w-full flex justify-center mb-6">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-48 h-48 object-contain rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-lime-700 font-medium mt-1">
                {product.subtitle}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {product.desc}
              </p>

              <div className="mt-6">
                <Button className="w-full bg-lime-700 hover:bg-lime-800 text-white py-3 rounded-md">
                  Order now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
