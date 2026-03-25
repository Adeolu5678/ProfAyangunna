import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import PeerReview from "@/components/PeerReview";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Publications />
        <PeerReview />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
