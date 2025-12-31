import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "BMW M3 Owner",
    content: "Found the exact crankshaft I needed for my E46 rebuild. Quality is exceptional and delivery was incredibly fast. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Auto Workshop Manager",
    content: "We've been sourcing parts from Apex for over 2 years now. Their catalog is extensive and their support team really knows their stuff.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Mercedes SL Owner",
    content: "The timing chain kit I ordered was perfect. Great communication throughout the process and the part arrived well-packaged.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Customer Reviews
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            TRUSTED BY <span className="text-gradient">THOUSANDS</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9</span>
            <span className="text-muted-foreground">based on 2,000+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-heading text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
