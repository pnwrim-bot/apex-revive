import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Brands from "@/components/sections/Brands";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Brands />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
