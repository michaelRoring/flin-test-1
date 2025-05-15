import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Benefit from "./components/Benefit";
import HowToHelp from "./components/HowToHelp";
import Statistic from "./components/Statistic";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen px-48">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <Benefit />
          <HowToHelp />
          <Solution />
          <Statistic />
          <CTA />
          <FAQ />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
