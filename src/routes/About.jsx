import AboutHero from "../components/about-page/AboutHero";
import AboutContact from "../components/about-page/AboutContact";

export default function About() {
  return (
    <div className="about-page pb-10">
      <AboutHero />
      <AboutContact />
    </div>
  );
}
