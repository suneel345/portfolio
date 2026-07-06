import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Writing from "./components/sections/writing";
import Contact from "./components/sections/contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Writing />
      <Contact />
    </main>
  );
}