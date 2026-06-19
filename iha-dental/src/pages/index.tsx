import HeroSection from "./HeroSection";
import Services from "./Services";
import Doctors from "./Doctors";
import Location from "./Location";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="services">
        <Services />
      </section>

      <section id="doctors">
        <Doctors />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="Location">
        <Location />
      </section>
    </>
  );
}