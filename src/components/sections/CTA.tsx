import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/20 via-background to-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Need Help Finding Parts?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl">
            CAN'T FIND WHAT
            <br />
            <span className="text-gradient">YOU'RE LOOKING FOR?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our expert team is here to help. Send us your VIN or registration number 
            and we'll source the exact part you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat With Us
            </Button>
            <Button variant="glass" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="pt-8">
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline">
              Or browse our complete catalog
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
