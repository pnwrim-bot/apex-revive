import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const carMakes = [
    "AUDI", "BMW", "MERCEDES-BENZ", "VOLKSWAGEN", "FORD", "TOYOTA",
    "HONDA", "NISSAN", "PORSCHE", "JAGUAR", "LAND ROVER", "VOLVO"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Engine Parts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider animate-fade-in">
                Premium Quality Parts
              </span>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none animate-slide-up">
                PRECISION
                <br />
                <span className="text-gradient">ENGINE PARTS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Quality parts for all leading brands. From crankshafts to rebuild kits, 
                we deliver performance you can trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl">
                Shop All Parts
              </Button>
              <Button variant="glass" size="xl">
                View Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl text-gradient">50K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl text-gradient">100+</p>
                <p className="text-sm text-muted-foreground">Brands</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl text-gradient">4.9★</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Vehicle Finder */}
          <div className="bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border shadow-2xl animate-scale-up">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                  FIND YOUR PARTS
                </h2>
                <p className="text-muted-foreground">
                  Select your vehicle to find compatible parts
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <select className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                    <option value="">Select Make</option>
                    {carMakes.map((make) => (
                      <option key={make} value={make.toLowerCase()}>{make}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>

                <div className="relative">
                  <select className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                    <option value="">Select Model</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>

                <div className="relative">
                  <select className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                    <option value="">Select Engine Code</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  <Search className="w-5 h-5 mr-2" />
                  Find Parts
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Don't know your engine code?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Chat with us!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
