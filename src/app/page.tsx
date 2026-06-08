import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingCalculator from "@/components/PricingCalculator";
import HighlightsBar from "@/components/HighlightsBar";
import ComparisonTable from "@/components/ComparisonTable";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PricingCalculator />
      <HighlightsBar />
      <ComparisonTable />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
