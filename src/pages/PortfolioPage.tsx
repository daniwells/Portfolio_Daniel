// Libs
import React, { useEffect, useMemo } from "react";

// Components
import Navbar from "../container/Navbar";
import Hero from "../container/Hero";
import AboutMe from "../container/AboutMe";
import Portifolio from "../container/Portifolio";
import ContactMe from "../container/ContactMe";

const useActiveSection = (ids: string[]) => {
  const [active, setActive] = React.useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
};

const PortfolioPage: React.FC = () => {
  const sections = useMemo(() => (
    [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ] as const
  ), []);

  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <main className="bg-background" >
      <div className="min-h-screen scroll-smooth text-white bg-black mesh-gradient">
        <Navbar sections={sections as any} active={active} />

        <Hero/>
        <AboutMe />
        <Portifolio />
        <ContactMe />
        
        <footer className="mx-auto max-w-6xl px-4 py-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Daniel Lima Portifolio
        </footer>

        <style>{`
          html { scroll-behavior: smooth; }

          /* glow rings */
          .ring-neon { box-shadow: 0 0 20px rgba(217,70,239,0.45), inset 0 0 20px rgba(217,70,239,0.25); }
        `}</style>
      </div>
    </main>
  );
};

export default PortfolioPage;