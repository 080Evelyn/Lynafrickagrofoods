const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/farming.jpg"
            alt="Farm"
            className="w-full rounded-2xl object-cover shadow-sm"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            About Lynafrick Agro Foods
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Lynafrick Agro Foods is committed to producing clean, nutritious
            flour made from real farm ingredients. Our flour is created from
            rice, cassava, millet, and plantain — with absolutely no
            preservatives or chemical additives.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We understand how much you don’t want processed foods. That’s why we
            took it upon ourselves at Lynafrick Agro to create the best natural
            food flour out there — completely organic, clean, and healthy for
            consumption without worries.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Every batch is hygienically processed and carefully packaged so that
            your family gets nothing but pure, wholesome goodness. At Lynafrick,
            our mission is simple: bring farm-fresh nourishment straight to your
            kitchen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
