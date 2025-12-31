import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Crankshaft",
    description: "The Core of Engine Power",
    features: ["Precision Machined", "OEM Quality"],
    image: "https://cdn-apexautoparts.azureedge.net/apex-files/files/WebFiles/images/cat_crank.png",
    href: "#",
  },
  {
    name: "Rebuild Kit",
    description: "Complete Engine Restoration",
    features: ["All-in-One Solution", "Full Compatibility"],
    image: "https://cdn-apexautoparts.azureedge.net/apex-files/files/WebFiles/images/cat_rebuild.png",
    href: "#",
  },
  {
    name: "Timing Chain Kit",
    description: "Accurate Engine Timing",
    features: ["Premium Quality", "Perfect Fit"],
    image: "https://cdn-apexautoparts.azureedge.net/apex-files/files/WebFiles/images/cat_timing.png",
    href: "#",
  },
  {
    name: "Oil Pump",
    description: "Vital Engine Lubrication",
    features: ["High Performance", "Long Lasting"],
    image: "https://cdn-apexautoparts.azureedge.net/apex-files/files/WebFiles/images/cat_pump.png",
    href: "#",
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Browse Categories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            SHOP BY <span className="text-gradient">CATEGORY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our extensive range of premium engine parts and accessories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 md:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(24_100%_50%_/_0.15)] card-shine"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-4 flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-gradient transition-all">
                    {category.name.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn p-0 text-primary hover:text-primary">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Categories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
