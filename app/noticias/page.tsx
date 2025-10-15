import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeNewsHero from "@/components/HomeNoticiasInicio";
import ViralSection from "@/components/SeccionNoticiasVirales";

export default function NoticiasPage() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <HomeNewsHero />
      </div>

      <div>
        <ViralSection />
      </div>

      <div>
        <Footer />
      </div>
      
    </>
  );
}