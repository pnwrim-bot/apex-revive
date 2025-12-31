import { Truck, Shield, Headphones, CreditCard, Award, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick delivery across UK & Europe with real-time tracking",
  },
  {
    icon: Shield,
    title: "Warranty Included",
    description: "All parts come with manufacturer warranty for peace of mind",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our team of specialists available 7 days a week",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple payment options with bank-level security",
  },
  {
    icon: Award,
    title: "OEM Quality",
    description: "Premium parts meeting original manufacturer standards",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy on all purchases",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            THE <span className="text-gradient">APEX</span> DIFFERENCE
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(24_100%_50%_/_0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">
                {feature.title.toUpperCase()}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
