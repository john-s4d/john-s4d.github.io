const baseLogos = [
  '/logos/cisco.svg',
  '/logos/hpe.svg',
  '/logos/gm.svg',
  '/logos/jpmc.svg',
  '/logos/amex.svg',
  '/logos/toyota.svg',
  '/logos/gehealthcare.svg',
  '/logos/morganstanley.svg'
];

const companyLogos = Array(3).fill(baseLogos).flat()

const Logos = () => (
  <section className="py-12 bg-[#111]">
    <div className="text-center mb-8 px-4">
      <h2 className="text-xl font-semibold text-gray-300">
        Who I've Supported
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Including roles at Salesforce and beyond
      </p>
    </div>
    <div className="relative bg-[#111]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-12 animate-carousel-normal min-w-[200%]">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="h-10 md:h-12 w-24 object-contain grayscale hover:grayscale-0 transition duration-300"
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
