const baseLogos = [
  '/images/salesforce.png',
  '/images/cisco.svg',
  '/images/hpe.svg',
  '/images/amex.svg',
  '/images/gehc.png',
  '/images/humana.svg',
];

const companyLogos = Array(3).fill(baseLogos).flat()

const Logos = () => (
  <section className="py-12 bg-[#111]">
    <div className="text-center mb-8 px-4">
      <h2 className="text-xl font-semibold text-gray-300">
        Who I've Supported
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        While in roles at Salesforce and beyond, I've collaborated with these companies and many more.
      </p>
    </div>
    <div className="relative bg-[#111]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-12 animate-carousel-normal min-w-[200%]">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 h-12 md:h-16 w-32 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Logos;
