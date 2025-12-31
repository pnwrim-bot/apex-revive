import { useEffect, useRef } from "react";

const brands = [
  { name: "BMW", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Bmw.png" },
  { name: "Mercedes-Benz", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Mercedes-Benz.png" },
  { name: "Audi", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Audi.png" },
  { name: "Volkswagen", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Vw.png" },
  { name: "Porsche", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Porsche.png" },
  { name: "Ford", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Ford.png" },
  { name: "Toyota", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Toyota.png" },
  { name: "Honda", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Honda.png" },
  { name: "Nissan", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Nissan.png" },
  { name: "Jaguar", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Jaguar.png" },
  { name: "Land Rover", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Land%20Rover.png" },
  { name: "Volvo", logo: "https://cdn-apexautoparts.azureedge.net/apex-files/files/vehicles/Volvo.png" },
];

const Brands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const scrollAnimation = () => {
      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollAnimation, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Trusted Brands
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            QUALITY PARTS FOR <span className="text-gradient">ALL BRANDS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We supply premium parts for over 100 leading automotive manufacturers
          </p>
        </div>

        {/* Scrolling Brands */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <a
                key={`${brand.name}-${index}`}
                href="#"
                className="flex-shrink-0 group"
              >
                <div className="w-36 h-36 bg-card rounded-2xl border border-border flex items-center justify-center p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(24_100%_50%_/_0.15)]">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  {brand.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
