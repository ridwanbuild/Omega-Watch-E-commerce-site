import Top_Navbar from "./Component/Share/Top_Navbar";
import Navbar from "./Component/Share/Navbar";
import HeroSection from "./Home/HeroSection";
import Contact from "./Home/Contact";
import Footer from "./Component/Share/Footer";
import Review from "./Home/Review";
import About from "./Home/About";
import SampleVideo from "./Home/SampleVideo";
import Shop from "./Home/Shop";
import Faq from "./Home/Faq";

export default function Layout() {
  return (
    <div className="w-full bg-[#f8fafc] relative">

      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-[2]">
        <Top_Navbar />

        <div className="mt-11">
          <Navbar />
        </div>

        <HeroSection />

        <div className="container m-auto px-4 pb-16">
          <Shop />
          <About />
          <Review />
          <SampleVideo />
          <Faq />
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}
