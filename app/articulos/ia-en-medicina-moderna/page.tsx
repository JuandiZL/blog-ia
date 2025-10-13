import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IaEnMedicinaModerna from "@/components/articulos/ia-en-medicina-moderna";

export default function Home() {
  return (
    <>
    <div>
      <Header />
    </div>

      <div>
        <IaEnMedicinaModerna />
      </div>

    <div>
      <Footer />
    </div>
    </>
  );
}