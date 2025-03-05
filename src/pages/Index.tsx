
import React from "react";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
