import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeNewsHero from "@/components/HomeNoticiasInicio";

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
        <Footer />
      </div>
      
    </>
  );
}